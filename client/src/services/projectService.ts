import api from '../api/axios';
import type { Project, ApiResponse } from '../types';

export const getProjects = async (): Promise<Project[]> => {
    const response = await api.get<ApiResponse<Project>>('/projects/');
    return response.data.data;
};