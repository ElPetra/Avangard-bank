import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Card justify="space-between">
            <CardItem
                flexDirection="row"
                gap="sm"
                alignItems="flex-start"
                className="gap5"
            >
                <CardItem alignItems="flex-start">
                    <Text color="black">{t('Контакт-центр')}</Text>
                    <Text color="black">{t('Будние дни с 8:00 до 20:00')}</Text>
                    <Text color="black">{t('Сб, Вс с 9:00 до 17:30')}</Text>
                    <Card className="w300" padding="none">
                        <Icon icon="contactPhoneBlack" />
                        <CardItem
                            flexDirection="row"
                            justify="space-evenly"
                            flexGrow="grow"
                            wrap="wrap"
                        >
                            <Text color="black">8900</Text>
                            <Text color="black">8-800-900-1000</Text>
                            <Text color="dark-gray">
                                {t('Бесплатные звонки по России')}
                            </Text>
                        </CardItem>
                    </Card>
                </CardItem>

                <CardItem alignItems="flex-start">
                    <Text color="black">{t('Поддержка')}</Text>
                    <Text marginBottom="16" color="black">
                        {t('Ежедневно с 8:00 до 20:00')}
                    </Text>
                    <Card className="w300" padding="none">
                        <Icon icon="contactPhoneBlack" />
                        <CardItem
                            flexDirection="row"
                            justify="space-evenly"
                            flexGrow="grow"
                            wrap="wrap"
                        >
                            <Text color="black">8900</Text>
                            <Text color="black">8-800-900-1000</Text>
                            <Text color="dark-gray">
                                {t('Бесплатные звонки по России')}
                            </Text>
                        </CardItem>
                    </Card>
                </CardItem>

                <CardItem alignItems="flex-start">
                    <Text color="black">{t('Юридический адрес')}</Text>
                    <Text color="black">{t('Россия, Москва, 115456,')}</Text>
                    <Text color="black">{t('ул. Авангардная, 19')}</Text>
                </CardItem>
            </CardItem>

            <CardItem
                flexDirection="row"
                alignItems="flex-start"
                gap="sm"
                className="flex-dir-col gap5"
            >
                <CardItem
                    className="pd-7-11"
                    bgColor="black"
                    borderRadius="small"
                    border="solidWhite"
                >
                    <Icon icon="appStore" width="100%" />
                </CardItem>
                <CardItem
                    className="pd-7-11"
                    bgColor="black"
                    borderRadius="small"
                    border="solidWhite"
                >
                    <Icon icon="googlePlay" width="100%" />
                </CardItem>
            </CardItem>
        </Card>
    );
};
