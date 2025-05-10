import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/icons';
import * as styles from './ContactsPage.module.scss';

export const ContactsPage = function ContactsPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleEmailClick = (email: string, subject: string, body: string) => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className={styles.ContactsPage}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <Button
                        className={styles.backBtn}
                        onClick={() => navigate('/')}
                    >
                        <Icon width={12} height={20} icon="buttonBack" />
                        <p className={styles.back}>{t('Назад')}</p>
                    </Button>
                    <h4 className={styles.contactsTitle}>{t('Контакты')}</h4>
                    <div className={styles.contactsBlock}>
                        <h5 className={styles.contactsBlockTitle}>
                            {t('Горячая линия для частных лиц')}
                        </h5>
                        <div className={styles.contactsInfo}>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-800-900-10-01</p>
                                <p className={styles.callFrom}>
                                    {t('Бесплатный звонок по России')}
                                </p>
                            </div>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-800-900-10-05</p>
                                <p className={styles.callFrom}>
                                    {t(
                                        'Для жителей Москвы и Московской области',
                                    )}
                                </p>
                            </div>
                            <div className={styles.contactsItem}>
                                <Button
                                    type="button"
                                    className={styles.email}
                                    onClick={() =>
                                        handleEmailClick(
                                            'help@avangardbank.ru',
                                            'Запрос в горячую линию',
                                            'Текст вашего сообщения',
                                        )
                                    }
                                >
                                    help@avangardbank.ru
                                </Button>
                                <p className={styles.callFrom}>Email</p>
                            </div>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-500-500-50-05</p>
                                <p className={styles.callFrom}>
                                    {t('Для звонков за пределами России')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactsBlock}>
                        <h5 className={styles.contactsBlockTitle}>
                            {t('Горячая линия для бизнеса')}
                        </h5>
                        <div className={styles.contactsInfo}>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-800-700-10-07</p>
                                <p className={styles.callFrom}>
                                    {t('Бесплатный звонок по России')}
                                </p>
                            </div>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-800-700-70-07</p>
                                <p className={styles.callFrom}>
                                    {t(
                                        'Для жителей Москвы и Московской области',
                                    )}
                                </p>
                            </div>
                            <div className={styles.contactsItem}>
                                <Button
                                    type="button"
                                    className={styles.email}
                                    onClick={() =>
                                        handleEmailClick(
                                            'Avg.help@avangardbank.ru',
                                            'Запрос в горячую линию',
                                            'Текст вашего сообщения',
                                        )
                                    }
                                >
                                    Avg.help@avangardbank.ru
                                </Button>
                                <p className={styles.callFrom}>Email</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactsBlock}>
                        <h5 className={styles.contactsBlockTitle}>
                            {t('Техническая поддержка')}
                        </h5>
                        <div className={styles.contactsInfo}>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-800-600-60-06</p>
                                <p className={styles.callFrom}>
                                    {t('Бесплатный звонок по России')}
                                </p>
                            </div>
                            <div className={styles.contactsItem}>
                                <p className={styles.phone}>8-800-600-66-06</p>
                                <p className={styles.callFrom}>
                                    {t(
                                        'Для жителей Москвы и Московской области',
                                    )}
                                </p>
                            </div>
                            <div className={styles.contactsItem}>
                                <Button
                                    type="button"
                                    className={styles.email}
                                    onClick={() =>
                                        handleEmailClick(
                                            'Support@avangardbank.ru',
                                            'Запрос в службу тех. поддержки',
                                            'Текст вашего сообщения',
                                        )
                                    }
                                >
                                    Support@avangardbank.ru
                                </Button>
                                <p className={styles.callFrom}>Email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
