import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Image } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

export const BankProducts = () => {
    const { t } = useTranslation();

    return (
        <Card marginTop="85" gap="large" justify="space-between">
            <CardItem
                flexDirection="column"
                alignItems="center"
                bgColor="white"
                flexGrow="grow"
            >
                <Image image="consumerLoansImage" />
                <Text
                    marginTop="20"
                    size="m"
                    weight="bold"
                    tag="h2"
                    align="center"
                    color="dark-gray"
                >
                    {t('Потребительские кредиты')}
                </Text>
                <Text align="center" marginTop="20" tag="p" color="dark-gray">
                    {t('Кредит наличными')}
                </Text>
            </CardItem>
            <CardItem
                flexDirection="column"
                alignItems="center"
                bgColor="white"
                flexGrow="grow"
            >
                <Image image="cardProductsImage" />
                <Text
                    marginTop="20"
                    size="m"
                    weight="bold"
                    tag="h2"
                    align="center"
                    color="dark-gray"
                >
                    {t('Карточные продукты')}
                </Text>
                <Text align="center" marginTop="20" tag="p" color="dark-gray">
                    {t('Подбор карты')}
                </Text>
            </CardItem>
            <CardItem
                flexDirection="column"
                alignItems="center"
                bgColor="white"
                flexGrow="grow"
            >
                <Image image="onlineTranslationsImage" />
                <Text
                    marginTop="20"
                    size="m"
                    weight="bold"
                    tag="h2"
                    align="center"
                    color="dark-gray"
                >
                    {t('Онлайн переводы')}
                </Text>
                <Text align="center" marginTop="20" tag="p" color="dark-gray">
                    {t('Переводы')}
                </Text>
            </CardItem>
        </Card>
    );
};
