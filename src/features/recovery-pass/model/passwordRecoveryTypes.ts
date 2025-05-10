export interface RequestRecoveryCodePayload {
    email: string;
}

export interface VerifyRecoveryCodePayload {
    email: string;
    code: string;
}

export interface ResetPasswordPayload {
    email: string;
    newPassword: string;
}
