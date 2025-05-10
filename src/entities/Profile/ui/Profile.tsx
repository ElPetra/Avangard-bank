import { Field, ErrorMessage, useFormikContext } from 'formik';
import { ChangeEvent } from 'react';
import { handlePhoneInput } from 'helpers/regFormHelpers';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Input } from 'shared/ui/Input';

export const Profile = () => {
    const { t } = useTranslation('registration');
    const { setFieldValue } = useFormikContext();

    return (
        <>
            <Card
                justify="space-between"
                padding="none"
                gap="large"
                marginBottom="20"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Номер телефона клиента')}</Text>
                    <Field
                        as={Input}
                        name="profile.mobilePhone"
                        type="text"
                        className="regInput"
                        placeholder="+79234123333"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handlePhoneInput(
                                e,
                                setFieldValue,
                                'profile.mobilePhone',
                            )
                        }
                    />
                    <ErrorMessage
                        className="error-text"
                        name="profile.mobilePhone"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">
                        {t('Включить email уведомления?')}
                    </Text>
                    <Field
                        as="select"
                        name="profile.emailNotification"
                        className="regInput"
                    >
                        <option value="Да">{t('Да')}</option>
                        <option value="Нет">{t('Нет')}</option>
                    </Field>
                    <ErrorMessage
                        className="error-text"
                        name="profile.emailNotification"
                        component="div"
                    />
                </CardItem>
            </Card>
            <Card
                justify="space-between"
                padding="none"
                gap="large"
                marginBottom="20"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Введите ваш email')}</Text>
                    <Field
                        as={Input}
                        placeholder="popov@mail.ru"
                        name="profile.email"
                        type="email"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="profile.email"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">
                        {t('Включить push-уведомления')}
                    </Text>
                    <Field
                        as="select"
                        name="profile.pushNotification"
                        className="regInput"
                    >
                        <option value="Да">{t('Да')}</option>
                        <option value="Нет">{t('Нет')}</option>
                    </Field>
                    <ErrorMessage
                        className="error-text"
                        name="profile.pushNotification"
                        component="div"
                    />
                </CardItem>
            </Card>
        </>
    );
};
