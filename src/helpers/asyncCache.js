export class AsyncCache {
    constructor(ttlMs = 60000) {
        // Default 1 minute TTL
        this.cache = new Map();
        this.TTL = ttlMs;
        this.pendingPromises = new Map();
    }

    async get(key, fetchFn) {
        // Check if there's already a pending promise for this key
        if (this.pendingPromises.has(key)) {
            return this.pendingPromises.get(key);
        }

        const cachedItem = this.cache.get(key);
        if (cachedItem && !this._isExpired(cachedItem.timestamp)) {
            return cachedItem.data;
        }

        // If we reach here, we need to fetch new data
        try {
            // Create a new promise for this fetch operation
            const promise = fetchFn();
            this.pendingPromises.set(key, promise);

            // Wait for the fetch to complete
            const data = await promise;

            // Store in cache with current timestamp
            this.cache.set(key, {
                data,
                timestamp: Date.now(),
            });

            return data;
        } finally {
            // Clean up the pending promise
            this.pendingPromises.delete(key);
        }
    }

    _isExpired(timestamp) {
        return Date.now() - timestamp > this.TTL;
    }

    invalidate(key) {
        this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }
}
