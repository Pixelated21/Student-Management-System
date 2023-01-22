import { CustomResponse } from '@/typescript/interface';

/**
 * Generates a custom response object with the provided data, messages, and errors.
 * @template D The type of data to include in the response.
 * @param data The data to include in the response.
 * @param messages A string or array of strings representing messages to include in the response.
 * @param error An array of strings representing errors to include in the response.
 * @returns A custom response object containing the provided data, messages, and errors.
 */
export const generateResponse = <D>(
	data: D,
	messages: string = '',
	error: string[] = [],
): CustomResponse<D> => ({
	messages,
	data,
	error,
});
