import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Icon, Image } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';

export const MobileApp = () => {
    const { t } = useTranslation();
    return (
        <Card
            marginTop="120"
            gap="medium"
            justify="space-between"
            marginBottom="120"
        >
            <CardItem
                alignItems="flex-start"
                padding="40"
                borderRadius="medium"
                bgColor="light-yellow"
                flexGrow="grow"
                className="posRel"
            >
                <Text
                    tag="h3"
                    marginBottom="16"
                    color="black"
                    size="m"
                    weight="bold"
                    width="w330"
                >
                    {t(
                        'Начните пользоваться мобильным приложением Avangard Online',
                    )}
                </Text>
                <CardItem
                    className="mb-14 pd-7-11"
                    bgColor="transparent"
                    borderRadius="small"
                    border="solidBlack"
                >
                    <Icon className="fill" icon="appStoreBlack" width="100%" />
                </CardItem>
                <CardItem
                    className="pd-7-11"
                    bgColor="transparent"
                    borderRadius="small"
                    border="solidBlack"
                >
                    <Icon icon="googlePlayBlack" width="100%" />
                </CardItem>
                <Image
                    image="phone"
                    className="posAbsVar-1 responsive-icon-w80"
                />
            </CardItem>
            <CardItem
                alignItems="flex-start"
                padding="40"
                borderRadius="medium"
                bgColor="light-yellow"
                flexGrow="grow"
                className="posRel"
            >
                <Text
                    tag="h3"
                    marginBottom="16"
                    color="black"
                    size="m"
                    weight="bold"
                >
                    {t('Интернет-банк')}
                </Text>
                <Text tag="div" color="black" marginBottom="130" width="w300">
                    {t('Управляйте всеми услугами банка не выходя из дома')}
                </Text>
                <Text tag="div" color="dark-gray">
                    www.avangard-bank.com
                </Text>
                <Image
                    image="laptop"
                    className="posAbsVar-1 responsive-icon-w220"
                />
            </CardItem>
        </Card>
    );
};
