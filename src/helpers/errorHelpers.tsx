import { Spinner } from 'shared/ui/Spinner/Spinner';

export const getErrorMessageContent = (
    isLoading: boolean,
    error: string | null,
    touchedError: boolean,
    validationError: string | undefined,
) => {
    if (isLoading) return <Spinner />;
    if (touchedError && validationError) return validationError;
    return error;
};
