export const errorResponse = (errors: string[]): {
    status: string;
    errors: string[];
} => {
    return {
        status: 'error',
        errors: errors
    };
}