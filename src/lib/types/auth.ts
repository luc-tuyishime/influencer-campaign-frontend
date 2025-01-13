export interface User {
    id: string;
    email: string;
    name: string;
    role: 'INFLUENCER' | 'BRAND';
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    name: string;
    role: 'INFLUENCER' | 'BRAND';
}

export interface AuthResponse {
    token: string;
    user: User;
    message?: string;
}


export interface AuthError {
    message: string;
    statusCode: number;
}
