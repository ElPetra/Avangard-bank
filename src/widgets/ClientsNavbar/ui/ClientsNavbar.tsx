import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from 'features/auth/model/authSlice';
import { ClientSupport } from 'entities/ClientSupport';

import { Container } from 'shared/ui/Conatiner/Container';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/icons';

import * as styles from './ClientsNavbar.module.scss';

interface ClientsNavbarProps {
    className?: string;
}

export const ClientsNavbar = ({ className }: ClientsNavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/');
    };

    return (
        <Container>
            <div className={classNames(styles.ClientsNavbar, {}, [])}>
                <div className={styles.links}>
                    <Icon icon="search" />
                    <AppLink
                        color="black"
                        to="#"
                        className={styles.mainLink}
                        underline
                        underlineColor="yellow"
                    >
                        {t('Поиск')}
                    </AppLink>
                    <Icon icon="help" />
                    <Button
                        type="button"
                        className={styles.mainLink}
                        onClick={() => setIsOpenModal(!isOpenModal)}
                    >
                        {t('Поддержка')}
                    </Button>
                    <Icon icon="locationBlack" />
                    <AppLink
                        color="black"
                        to="/atms"
                        className={styles.mainLink}
                        underline
                        underlineColor="yellow"
                    >
                        {t('Банкоматы и отделения')}
                    </AppLink>
                    <Icon icon="notification" />
                    <AppLink
                        color="black"
                        to="/notification"
                        className={styles.mainLink}
                        underline
                        underlineColor="yellow"
                    >
                        {t('Уведомления')}
                    </AppLink>
                </div>
                <div className={styles.client__control}>
                    <div className={styles.client__control_info}>
                        <Icon icon="clientDefault" width={34} height={31} />
                        <Text tag="span" color="black">
                            Алиса Ковальчук
                        </Text>
                    </div>
                    <Button
                        type="button"
                        className={styles.client__control_link}
                        onClick={handleLogout}
                    >
                        <Icon icon="exit" />
                        <Text tag="span" color="black">
                            {t('Выйти')}
                        </Text>
                    </Button>
                </div>
            </div>
            <ClientSupport
                setIsOpenModal={setIsOpenModal}
                isOpenModal={isOpenModal}
            />
        </Container>
    );
};
