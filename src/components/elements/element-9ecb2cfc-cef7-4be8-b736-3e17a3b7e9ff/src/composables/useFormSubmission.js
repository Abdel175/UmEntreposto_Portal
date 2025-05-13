export function useFormSubmission({ emit, forceValidateAllFields }) {
    const handleSubmit = async event => {
        try {
            const isValid = forceValidateAllFields();
            if (!isValid) {
                emit('trigger-event', { name: 'submit-validation-error', event });
            } else {
                emit('trigger-event', { name: 'submit', event });
            }
        } catch (error) {
            console.error('Form submission error', error);
        } finally {
        }
    };

    return { handleSubmit };
}
