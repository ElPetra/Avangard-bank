import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { CardItem } from 'shared/ui/CardItem';
import { Image } from 'shared/ui/icons';
import { Button } from 'shared/ui/Button';

export const ThanksMessage = () => {
    const { t } = useTranslation('registration');
    const navigate = useNavigate();

    return (
        <CardItem flexGrow="grow" justify="space-evenly">
            <Text
                tag="h3"
                color="black"
                size="l"
                marginBottom="16"
                weight="bold"
                align="center"
            >
                {t('Поздравляем!')}
            </Text>
            <Text
                tag="p"
                color="black"
                size="sm"
                marginBottom="10"
                align="center"
            >
                {t('Поздравляем сообщение')}
            </Text>
            <Image image="success" />
            <Button
                size="large"
                variant="primary"
                onClick={() => navigate('/')}
            >
                {t('Перейти на главную страницу')}
            </Button>
        </CardItem>
    );
};
