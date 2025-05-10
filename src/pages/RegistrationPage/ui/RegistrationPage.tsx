import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { registrationSteps } from 'helpers/stepHelpers';
import { ProgressBar } from 'widgets/ProgressBar/ui/ProgressBar';
import { initialValues } from 'features/client/model/clientInitialValues';
import { clientSchema } from 'features/client/model/clientSchema';
import { ClientData } from 'features/client/model/clientTypes';
import { PersonalData } from 'entities/PersonalData';
import { Address } from 'entities/Address';
import { Passport } from 'entities/Passport';
import { Profile } from 'entities/Profile';
import { ThanksMessage } from 'entities/ThanksMessage';
import { FailureMessage } from 'entities/FailureMessage';
import { useRegisterClientMutation } from 'features/client/api/clientApi';

import { CardItem } from 'shared/ui/CardItem';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/icons';
import { FormWrapper } from 'shared/ui/FormWrapper';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './RegistrationPage.module.scss';

interface RegistrationPageProps {
    className?: string;
}

export const RegistrationPage = ({ className }: RegistrationPageProps) => {
    const [step, setStep] = useState(1);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const navigate = useNavigate();
    const [registerClient, { isLoading }] = useRegisterClientMutation();
    const { t } = useTranslation('registration');

    const handleSubmit = async (values: ClientData) => {
        try {
            await registerClient(values).unwrap();
            setIsSuccess(true);
        } catch (e) {
            console.error('Ошибка регистрации', e);
            setIsSuccess(false);
        }
    };

    const handleBackClick = () =>
        step === 1 ? navigate('/') : setStep(step - 1);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={clientSchema[step - 1]}
            onSubmit={handleSubmit}
        >
            {({ isValid, handleSubmit, validateForm }) => (
                <Form
                    className={classNames(styles.RegistrationPage, {}, [
                        className,
                    ])}
                >
                    <div className="overlay-dark" />
                    <FormWrapper>
                        {isLoading && <Spinner />}
                        {isSuccess === true && <ThanksMessage />}
                        {isSuccess === false && <FailureMessage />}
                        {isSuccess === null && (
                            <>
                                <CardItem flexDirection="row">
                                    <Icon icon="arrowBack" />
                                    <Button
                                        variant="normal"
                                        onClick={handleBackClick}
                                    >
                                        {t('Назад')}
                                    </Button>
                                </CardItem>
                                <Text
                                    tag="h2"
                                    color="black"
                                    weight="bold"
                                    size="l"
                                    align="left"
                                    marginBottom="16"
                                >
                                    {t('Регистрация')}
                                </Text>

                                <ProgressBar
                                    step={step - 1}
                                    steps={registrationSteps}
                                />

                                <CardItem>
                                    {step === 1 && <PersonalData />}
                                    {step === 2 && <Passport />}
                                    {step === 3 && <Address />}
                                    {step === 4 && <Profile />}
                                    <div>
                                        {step === 4 ? (
                                            <Button
                                                size="large"
                                                variant="primary"
                                                onClick={handleSubmit}
                                                disabled={!isValid}
                                            >
                                                {t('Отправить')}
                                            </Button>
                                        ) : (
                                            <Button
                                                size="large"
                                                variant="primary"
                                                onClick={async () => {
                                                    const errors =
                                                        await validateForm();
                                                    if (
                                                        Object.keys(errors)
                                                            .length === 0
                                                    ) {
                                                        setStep(step + 1);
                                                    }
                                                }}
                                                disabled={!isValid}
                                            >
                                                {t('Далее')}
                                            </Button>
                                        )}
                                    </div>
                                </CardItem>
                            </>
                        )}
                    </FormWrapper>
                </Form>
            )}
        </Formik>
    );
};
