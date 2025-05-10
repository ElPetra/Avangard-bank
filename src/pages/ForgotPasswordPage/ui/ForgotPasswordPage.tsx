import { FC } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { RootState } from 'app/store/store';
import {
    useRequestRecoveryCodeMutation,
    useVerifyRecoveryCodeMutation,
    useResetPasswordMutation,
} from 'features/recovery-pass/api/passwordRecoveryApi';
import {
    nextStep,
    prevStep,
    setEmail,
    setCode,
    setErrorMessage,
    resetState,
} from 'features/recovery-pass/model/passwordRecoverySlice';

import { validationSchemas } from 'features/recovery-pass/model/validationSchemas';
import {
    getButtonText,
    getErrorMessage,
} from 'features/recovery-pass/model/helpers';

import { getErrorMessageContent } from 'helpers/errorHelpers';
import { forgotPasswordSteps } from 'helpers/stepHelpers';
import { ProgressBar } from 'widgets/ProgressBar/ui/ProgressBar';
import { RecoveryEmail } from 'entities/RecoveryEmail';
import { FormWrapper } from 'shared/ui/FormWrapper';
import { Button } from 'shared/ui/Button';
import { CardItem } from 'shared/ui/CardItem';
import { Icon } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

import * as styles from './ForgotPasswordPage.module.scss';

export const ForgotPasswordPage: FC = () => {
    const { t } = useTranslation('forgot-password');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { step, email, code, newPassword, errorMessage } = useSelector(
        (state: RootState) => state.passwordRecovery,
    );

    const [requestRecoveryCode, { isLoading: isRequestLoading }] =
        useRequestRecoveryCodeMutation();
    const [verifyRecoveryCode, { isLoading: isVerifyLoading }] =
        useVerifyRecoveryCodeMutation();
    const [resetPassword, { isLoading: isResetLoading }] =
        useResetPasswordMutation();

    const handleSubmit = async (values: {
        email: string;
        code?: string;
        newPassword?: string;
        confirmPassword?: string;
    }) => {
        try {
            if (step === 1) {
                await requestRecoveryCode({ email: values.email }).unwrap();
                dispatch(setEmail(values.email));
                dispatch(nextStep());
            } else if (step === 2) {
                await verifyRecoveryCode({
                    email,
                    code: values.code!,
                }).unwrap();
                dispatch(setCode(values.code!));
                dispatch(nextStep());
            } else if (step === 3) {
                await resetPassword({
                    email,
                    newPassword: values.newPassword!,
                }).unwrap();
                dispatch(resetState());
                navigate('/');
            }
        } catch (error) {
            dispatch(setErrorMessage(getErrorMessage(step, t)));
        }
    };

    const handleBackClick = () =>
        step > 1 ? dispatch(prevStep()) : navigate('/');

    const initialValues = { email, code, newPassword, confirmPassword: '' };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[step - 1]}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className={styles.ForgotPasswordPage}>
                    <div className="overlay-dark" />
                    <FormWrapper className={styles.ForgotPasswordPage_wrapper}>
                        <CardItem flexDirection="row">
                            <Icon icon="arrowBack" />
                            <Button variant="normal" onClick={handleBackClick}>
                                {t('Назад')}
                            </Button>
                        </CardItem>
                        <Text
                            tag="h2"
                            color="black"
                            weight="bold"
                            size="l"
                            align="center"
                            marginBottom="16"
                        >
                            {t('Восстановление пароля')}
                        </Text>

                        <ProgressBar
                            step={step - 1}
                            steps={forgotPasswordSteps}
                            isForgotPasswordPage
                        />

                        {step === 1 && (
                            <RecoveryEmail
                                label={t('Введите ваш email')}
                                fieldName="email"
                                errorMessage={getErrorMessageContent(
                                    isRequestLoading,
                                    errorMessage,
                                    touched.email!,
                                    errors.email,
                                )}
                            />
                        )}
                        {step === 2 && (
                            <RecoveryEmail
                                label={t('Введите код подтверждения')}
                                fieldName="code"
                                errorMessage={getErrorMessageContent(
                                    isVerifyLoading,
                                    errorMessage,
                                    touched.code!,
                                    errors.code,
                                )}
                            />
                        )}
                        {step === 3 && (
                            <>
                                <RecoveryEmail
                                    label={t('Введите новый пароль')}
                                    fieldName="newPassword"
                                    errorMessage={getErrorMessageContent(
                                        isResetLoading,
                                        null,
                                        touched.newPassword!,
                                        errors.newPassword,
                                    )}
                                />
                                <RecoveryEmail
                                    label={t('Введите пароль повторно')}
                                    fieldName="confirmPassword"
                                    errorMessage={getErrorMessageContent(
                                        isResetLoading,
                                        null,
                                        touched.confirmPassword!,
                                        errors.confirmPassword,
                                    )}
                                />
                                {errorMessage && (
                                    <div className={styles.error_message}>
                                        <Text
                                            color="error"
                                            size="xxs"
                                            align="center"
                                        >
                                            {t(errorMessage)}
                                        </Text>
                                    </div>
                                )}
                            </>
                        )}
                        <Button
                            type="submit"
                            disabled={
                                isRequestLoading ||
                                isVerifyLoading ||
                                isResetLoading
                            }
                            variant="primary"
                            size="large"
                        >
                            {getButtonText(step, t)}
                        </Button>
                    </FormWrapper>
                </Form>
            )}
        </Formik>
    );
};
