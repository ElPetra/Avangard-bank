import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, KeyboardEvent } from 'react';
import { handleDateInput, handleKeyDown } from 'helpers/regFormHelpers';

import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Input } from 'shared/ui/Input';

export const PersonalData = () => {
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
                    <Text color="dark-gray">{t('Имя')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Иван')}
                        name="firstName"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="firstName"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Фамилия')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Иванов')}
                        name="lastName"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="lastName"
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
                    <Text color="dark-gray">{t('Отчество')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Иванович')}
                        name="patronymic"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="patronymic"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Пол')}</Text>
                    <Field
                        as="select"
                        name="gender"
                        className="Select, regInput"
                    >
                        <option value="MALE">{t('Мужской')}</option>
                        <option value="FEMALE">{t('Женский')}</option>
                    </Field>
                    <ErrorMessage
                        className="error-text"
                        name="gender"
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
                    <Text color="dark-gray">{t('Дата рождения')}</Text>
                    <Field
                        as={Input}
                        name="dateOfBirth"
                        type="text"
                        placeholder="01-02-1980"
                        className="regInput"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleDateInput(e, setFieldValue, 'dateOfBirth')
                        }
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                            handleKeyDown(e, setFieldValue, 'dateOfBirth')
                        }
                    />
                    <ErrorMessage
                        className="error-text"
                        name="dateOfBirth"
                        component="div"
                    />
                </CardItem>
            </Card>
        </>
    );
};
