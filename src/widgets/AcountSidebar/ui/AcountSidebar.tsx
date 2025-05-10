import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { CardItem } from 'shared/ui/CardItem';
import { Icon } from 'shared/ui/icons';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './AcountSidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const AcountSidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.clients__sidebar)}>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="home" />
                <AppLink to="/" color="gray">
                    {t('Главная страница')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="acount" />
                <AppLink to="/" color="gray">
                    {t('Счета')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="transfer" />
                <AppLink to="/" color="gray">
                    {t('Переводы навигация')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="creditCards" />
                <AppLink to="/" color="gray">
                    {t('Карты')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="credits" />
                <AppLink to="/" color="gray">
                    {t('Кредиты')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="deposit" />
                <AppLink to="/" color="gray">
                    {t('Депозитные счета')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="payment" />
                <AppLink to="/" color="gray">
                    {t('Платежи')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="transactions" />
                <AppLink to="/" color="gray">
                    {t('Сделки и предложения')}
                </AppLink>
            </CardItem>
            <CardItem flexDirection="row" gap="s">
                <Icon icon="insuarense" />
                <AppLink to="/" color="gray">
                    {t('Страхование')}
                </AppLink>
            </CardItem>
        </div>
    );
};
