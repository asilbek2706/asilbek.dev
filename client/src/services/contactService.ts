import api from '../api/axios';
import type { ApiResponse, Question } from '../types';

interface IContact {
    name: string;
    email: string;
    message: string;
    recaptcha_token: string;
}

export const getQuestions = async (): Promise<Question[]> => {
    const response = await api.get<ApiResponse<Question>>('/questions-list/');
    return response.data.data;
};

export const sendQuestion = async (data: IContact): Promise<ApiResponse<IContact>> => {
    const response = await api.post<ApiResponse<IContact>>('/contact/',
        {
            name: data.name,
            email: data.email,
            message: data.message,
            recaptcha_token: data.recaptcha_token
        });
    return response.data;
};