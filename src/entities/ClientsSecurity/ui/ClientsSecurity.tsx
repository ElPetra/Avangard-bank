import { Text } from 'shared/ui/Text';
import { CardItem } from 'shared/ui/CardItem';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import * as styles from './ClientsSecurity.module.scss';

export const ClientsSecurity = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.clinets__panel_info)}>
            <div className={classNames(styles.clinets__panel_info_left)}>
                <CardItem gap="xs">
                    <Text tag="h3" color="black" weight="bold">
                        {t('Изменить пароль')}
                    </Text>
                    <Text color="dark-gray" align="center">
                        {t('Изменить текст')}
                    </Text>
                    <Button size="medium" variant="primary">
                        {t('Изменить пароль')}
                    </Button>
                </CardItem>
                <CardItem gap="xs">
                    <Text tag="h3" color="black" weight="bold">
                        {t('Изменить эл почту')}
                    </Text>
                    <Text color="dark-gray" align="center">
                        {t('Изменить эл почту текст')}
                    </Text>
                    <Button size="medium" variant="primary">
                        {t('Изменить Email')}
                    </Button>
                </CardItem>
            </div>

            <div className={classNames(styles.clinets__panel_info_right)}>
                <CardItem gap="xs">
                    <Text tag="h3" color="black" weight="bold">
                        {t('Изменить контрольный вопрос')}
                    </Text>
                    <Text color="dark-gray" align="center">
                        {t('Изменить контрольный вопрос текст')}
                    </Text>
                    <Button size="large" variant="primary">
                        {t('Изменить контрольный вопрос')}
                    </Button>
                </CardItem>
            </div>
        </div>
    );
};
