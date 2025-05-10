import { useTranslation } from 'react-i18next';
import { Container } from 'shared/ui/Conatiner/Container';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher/indext';
import { Logo } from 'shared/ui/Logo';

import { Icon } from 'shared/ui/icons';

import * as styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className={classNames(styles.navbar, {}, [])}>
                <AppLink to="/" underline={false}>
                    <Logo className="fill-white" />
                </AppLink>
                <div className={styles.links}>
                    <Icon icon="location" />
                    <AppLink
                        to="/atms"
                        className={styles.mainLink}
                        underline
                        underlineColor="yellow"
                    >
                        {t('Банкоматы и отделения')}
                    </AppLink>
                    <Icon icon="monetization" />
                    <AppLink
                        to="/exchange"
                        className={styles.mainLink}
                        underline
                        underlineColor="yellow"
                    >
                        {t('Курсы валют')}
                    </AppLink>
                    <Icon icon="contactPhone" />
                    <AppLink
                        to="/contacts"
                        className={styles.mainLink}
                        underline
                        underlineColor="yellow"
                    >
                        {t('Контакты')}
                    </AppLink>
                    <LangSwitcher />
                </div>
            </div>
        </Container>
    );
};
