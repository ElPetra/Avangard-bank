import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordRecoveryState {
    step: number;
    email: string;
    code: string;
    newPassword: string;
    isSuccess: boolean | null;
    errorMessage: string | null;
}

const initialState: PasswordRecoveryState = {
    step: 1,
    email: '',
    code: '',
    newPassword: '',
    isSuccess: null,
    errorMessage: null,
};

const passwordRecoverSlice = createSlice({
    name: 'passwordRecovery',
    initialState,
    reducers: {
        nextStep(state) {
            state.step += 1;
        },
        prevStep(state) {
            if (state.step > 1) {
                state.step -= 1;
            }
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setCode(state, action: PayloadAction<string>) {
            state.code = action.payload;
        },
        setNewPassword(state, action: PayloadAction<string>) {
            state.newPassword = action.payload;
        },
        setErrorMessage(state, action: PayloadAction<string | null>) {
            state.errorMessage = action.payload;
        },
        resetState: () => initialState,
    },
});

export const {
    nextStep,
    prevStep,
    setEmail,
    setCode,
    setNewPassword,
    setErrorMessage,
    resetState,
} = passwordRecoverSlice.actions;

export default passwordRecoverSlice.reducer;
