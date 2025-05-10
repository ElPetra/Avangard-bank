import { Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Input } from 'shared/ui/Input';

export const Address = () => {
    const { t } = useTranslation('registration');

    return (
        <>
            <Card
                justify="space-between"
                padding="none"
                gap="large"
                marginBottom="15"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Страна проживания')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Россия')}
                        name="address.country"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.country"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Регион проживания')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Самарский край')}
                        name="address.region"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.region"
                        component="div"
                    />
                </CardItem>
            </Card>
            <Card
                justify="space-between"
                padding="none"
                gap="large"
                marginBottom="15"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Город проживания')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Самара')}
                        name="address.city"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.city"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Улица проживания')}</Text>
                    <Field
                        as={Input}
                        placeholder={t('Ленина')}
                        name="address.street"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.street"
                        component="div"
                    />
                </CardItem>
            </Card>
            <Card
                justify="space-between"
                padding="none"
                gap="large"
                marginBottom="15"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Номер дома')}</Text>
                    <Field
                        as={Input}
                        placeholder="5"
                        name="address.houseNumber"
                        type="text"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.houseNumber"
                        component="div"
                    />
                </CardItem>
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Номер квартиры')}</Text>
                    <Field
                        as={Input}
                        placeholder="13"
                        name="address.apartmentNumber"
                        type="number"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.apartmentNumber"
                        component="div"
                    />
                </CardItem>
            </Card>
            <Card
                justify="space-between"
                padding="none"
                gap="large"
                marginBottom="15"
            >
                <CardItem className="w300" alignItems="flex-start">
                    <Text color="dark-gray">{t('Почтовый индекс')}</Text>
                    <Field
                        as={Input}
                        placeholder="41111"
                        name="address.postcode"
                        type="number"
                        className="regInput"
                    />
                    <ErrorMessage
                        className="error-text"
                        name="address.postcode"
                        component="div"
                    />
                </CardItem>
            </Card>
        </>
    );
};
