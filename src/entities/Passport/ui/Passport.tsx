import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, KeyboardEvent } from 'react';
import { handleDateInput, handleKeyDown } from 'helpers/regFormHelpers';

import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Input } from 'shared/ui/Input';

export const Passport = () => {
    const { t } = useTranslation('registration');
    const { setFieldValue } = useFormikContext();

    return (
        <>
            <Card
                padding="none"
                justify="space-between"
                gap="large"
                marginBottom="20"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Номер паспорта')}</Text>
                    <Field
                        as={Input}
                        placeholder="578142"
                        name="passport.number"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="passport.number"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Дата выдачи паспорта')}</Text>
                    <Field
                        as={Input}
                        placeholder="11-08-2003"
                        name="passport.issuanceDate"
                        type="text"
                        className="regInput"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleDateInput(
                                e,
                                setFieldValue,
                                'passport.issuanceDate',
                            )
                        }
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                            handleKeyDown(
                                e,
                                setFieldValue,
                                'passport.issuanceDate',
                            )
                        }
                    />
                    <ErrorMessage
                        className="error-text"
                        name="passport.issuanceDate"
                        component="div"
                    />
                </CardItem>
            </Card>
            <Card
                padding="none"
                justify="space-between"
                gap="large"
                marginBottom="20"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Серия паспорта')}</Text>
                    <Field
                        as={Input}
                        placeholder="1111"
                        name="passport.series"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="passport.series"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Кем выдан паспорт')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('МВД')}
                        name="passport.issuedBy"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="passport.issuedBy"
                        component="div"
                    />
                </CardItem>
            </Card>
            <Card
                padding="none"
                justify="space-between"
                gap="large"
                marginBottom="20"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Гражданство')}</Text>
                    <Field
                        as="select"
                        name="passport.citizenship"
                        className="regInput"
                    >
                        <option value="Россия">{t('Россия')}</option>
                    </Field>
                    <ErrorMessage
                        className="error-text"
                        name="passport.citizenship"
                        component="div"
                    />
                </CardItem>
            </Card>
        </>
    );
};
