export interface ApiResponse<T> {
    status: boolean;
    statuscode: number;
    message: string;
    data: T[];
    timestamp: string;
}

export interface AboutData {
    firstname: string;
    lastname: string;
    image: string;
    about_text: string;
    phone_number: string;
    email: string;
    github_link: string;
    telegram_link: string;
    instagram_link: string;
}

export interface Project {
    id?: number;
    project_name: string;
    project_image: string;
    project_description: string;
    project_link: string;
    project_github_link: string;
    created_at: string;
}

export interface Question {
    name: string;
    email: string;
    message: string;
    answer?: string;
    created_at?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface StatusState {
    type: 'success' | 'danger' | 'info';
    msg: string;
}