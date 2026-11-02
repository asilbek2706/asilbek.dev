import api from '../api/axios';
import type { ApiResponse } from '../types';

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
    order: number;
}

export const getFAQs = async (): Promise<FAQItem[]> => {
    const response = await api.get<ApiResponse<FAQItem[]>>('/faq/');
    return response.data.data;
};
