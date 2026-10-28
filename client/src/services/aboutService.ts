import api from '../api/axios';
import type { AboutData, ApiResponse } from '../types';

export const getAboutInfo = async (): Promise<AboutData | null> => {
    const response = await api.get<ApiResponse<AboutData>>('/about/');
    return response.data.data;
};
