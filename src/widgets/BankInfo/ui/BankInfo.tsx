import { useTranslation } from 'react-i18next';

import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Image } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

export const BankInfo = () => {
    const { t } = useTranslation();
    return (
        <Card marginTop="100" gap="small" justify="space-between">
            <CardItem flex="50%">
                <Image image="avangardUsers" />
                <Text size="l" weight="bold" color="black">
                    40000+
                </Text>
                <Text marginBottom="16" size="sm" color="black">
                    пользователей
                </Text>
                <Image image="avangardTransactions" />
                <Text size="l" weight="bold" color="black">
                    10 млн+
                </Text>
                <Text size="sm" color="black">
                    транзакций
                </Text>
            </CardItem>
            <CardItem flex="50%">
                <Text
                    tag="h2"
                    color="black"
                    size="l"
                    marginBottom="10"
                    weight="bold"
                >
                    {t('О банке')}
                </Text>
                <Text
                    marginBottom="60"
                    color="black"
                    lineHeight="auto"
                    tag="p"
                    size="sm"
                >
                    {t('О банке полная информация')}
                </Text>
                <Text color="black" lineHeight="auto" tag="p" size="sm">
                    {t('Дистанционное обслуживание')}
                </Text>
            </CardItem>
        </Card>
    );
};
