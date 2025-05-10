export interface authTypes {
    email: string;
    password: string;
}

export interface AuthState {
    email: string;
    password: string;
    isAuthenticated: boolean;
    token: string | null;
    error: string | null;
}
