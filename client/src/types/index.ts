export interface ApiResponse<T> {
    status: boolean;
    statuscode: number;
    message: string;
    data: T;
    timestamp: string;
}

export interface AboutData {
    id?: number;
    firstname: string;
    lastname: string;
    image: string | null;
    about_text: string;

    hero_badge: string;
    hero_university: string;
    hero_description: string;
    hero_role: string;
    hero_primary_button: string;
    hero_secondary_button: string;

    phone_number: string;
    email: string;
    github_link: string;
    telegram_link: string;
    instagram_link: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string | null;
    github_link: string;
    demo_link: string;
    technologies: string[];
    created_at: string;
}

export interface Question {
    id: number;
    question: string;
    answer: string;
    order: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    id: number;
}

export interface StatusState {
    type: 'success' | 'danger' | 'info';
    msg: string;
}
