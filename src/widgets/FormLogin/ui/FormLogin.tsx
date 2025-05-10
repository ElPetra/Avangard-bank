import { ReactNode, useState, KeyboardEvent } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { authShema } from 'features/auth/model/authShema';
import { useLoginMutation } from 'features/auth/api/authApi';

import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/icons';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './FormLogin.module.scss';

interface FormLoginProps {
    className?: string;
    children?: ReactNode;
}

export const FormLogin = ({ className, children }: FormLoginProps) => {
    const [authError, setAuthError] = useState('');
    const { t } = useTranslation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        setIsCapsLockOn(e.getModifierState('CapsLock'));
    };

    const handleSubmit = async (
        values: { email: string; password: string },
        { resetForm }: { resetForm: () => void },
    ) => {
        try {
            await login(values).unwrap();
            resetForm();
            navigate('/clients');
            setAuthError('');
        } catch (err) {
            setAuthError(t('Ошибка авторизации'));
            console.error('Ошибка авторизации:', err);
        }
    };
    return (
        <div className={classNames(styles.FormLogin, {}, [className])}>
            <Text color="black" align="center" size="l" weight="extra-bold">
                {t('Войти')}
            </Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={authShema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty, errors, touched }) => (
                    <Form>
                        <div className={styles.fieldContainer}>
                            <div className={styles.emailContainer}>
                                <Field
                                    as={Input}
                                    name="email"
                                    placeholder={t('Почта')}
                                    type="email"
                                    className={classNames(
                                        errors.email && touched.email
                                            ? styles.inputError
                                            : '',
                                        {},
                                        ['pd-right40'],
                                    )}
                                />
                                {errors.email && touched.email && (
                                    <Icon
                                        width={20}
                                        icon="worningSymb"
                                        className={styles.capsLockIcon}
                                    />
                                )}
                            </div>
                            <ErrorMessage name="email">
                                {(msg) => (
                                    <>
                                        <Text color="error" size="xxs">
                                            {t(msg)}
                                        </Text>
                                        <Text color="dark-gray" size="xxs">
                                            {t('Пример: example@gmail.com')}
                                        </Text>
                                    </>
                                )}
                            </ErrorMessage>
                        </div>

                        <div className={styles.fieldContainer}>
                            <div className={styles.passwordContainer}>
                                <Field
                                    as={Input}
                                    name="password"
                                    placeholder={t('Пароль')}
                                    type={
                                        isPasswordVisible ? 'text' : 'password'
                                    }
                                    onKeyDown={handleKeyDown}
                                    className={classNames(
                                        errors.password && touched.password
                                            ? styles.inputError
                                            : '',
                                        {},
                                        ['pd-right40'],
                                    )}
                                />
                                {errors.password && touched.password ? (
                                    <Icon
                                        width={20}
                                        icon="worningSymb"
                                        className={styles.capsLockIcon}
                                    />
                                ) : (
                                    <Button
                                        variant="link"
                                        onClick={() =>
                                            setIsPasswordVisible(
                                                !isPasswordVisible,
                                            )
                                        }
                                        className={styles.showPasswordButton}
                                    >
                                        {isPasswordVisible ? (
                                            <Icon width={20} icon="eyeClose" />
                                        ) : (
                                            <Icon width={20} icon="eyeOpen" />
                                        )}
                                    </Button>
                                )}
                            </div>
                            <ErrorMessage name="password">
                                {(msg) => (
                                    <Text color="error" size="xxs">
                                        {t(msg)}
                                    </Text>
                                )}
                            </ErrorMessage>
                            {isCapsLockOn && (
                                <Text color="error" size="xxs">
                                    {t('Включен CapsLock')}
                                </Text>
                            )}
                        </div>

                        {authError && (
                            <Text color="error" size="xxs">
                                {t(authError)}
                            </Text>
                        )}

                        <Button
                            size="large"
                            variant="primary"
                            type="submit"
                            disabled={!isValid || !dirty || isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </Form>
                )}
            </Formik>

            <Button type="button" variant="link">
                <AppLink to="/forgot-password" color="black">
                    {t('Забыли пароль?')}
                </AppLink>
            </Button>
            <Button size="large" variant="secondary">
                <AppLink to="/registration" color="black">
                    {t('Зарегистрироваться')}
                </AppLink>
            </Button>
            {children}
        </div>
    );
};
