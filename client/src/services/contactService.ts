import api from '../api/axios';
import type {
    ApiResponse,
    ContactResponse,
    Question,
} from '../types';

interface SendQuestionPayload {
    name: string;
    email: string;
    message: string;
    recaptcha_token: string;
}

export const getQuestions = async (): Promise<Question[]> => {
    const response = await api.get<ApiResponse<Question[]>>('/questions-list/');
    return response.data.data;
};

export const sendQuestion = async (
    data: SendQuestionPayload,
): Promise<ApiResponse<ContactResponse>> => {
    const response = await api.post<ApiResponse<ContactResponse>>(
        '/contact/',
        data,
    );

    return response.data;
};
