import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/icons';

import * as styles from './ModalContacts.module.scss';

const ModalContacts: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Text tag="h3" size="l" color="black" weight="bold">
                {t('Контакты для связи')}
            </Text>
            <div className={styles.modalContacts}>
                <Text
                    tag="h4"
                    size="m"
                    color="black"
                    weight="bold"
                    marginTop="25"
                >
                    {t(
                        'Вы можете связаться с нами с 8:00 до 20:00 ежедневно по номерам:',
                    )}
                </Text>
                <Text tag="p" size="m" color="almost-black" marginTop="9">
                    {t('Поддержка')}
                </Text>
                <div className={styles.modalContacts__phone}>
                    <div className={styles.modalContacts__phone__icon}>
                        <Icon icon="phoneIphone" widthAndHeight={24} />
                    </div>
                    <div className={styles.modalContacts__phone__text}>
                        <Text tag="p" size="m" color="almost-black">
                            8900 {t('короткий номер')}
                        </Text>
                        <Text tag="p" size="m" color="almost-black">
                            8-800-900-1001
                        </Text>
                    </div>
                </div>
                <Text tag="p" size="m" color="dark-gray" marginTop="9">
                    {t('Бесплатные звонки по России')}
                </Text>
                <Text
                    tag="p"
                    size="m"
                    color="black"
                    weight="bold"
                    marginTop="25"
                >
                    {t(
                        'Вы также можете отправить письмо на электронный адрес:',
                    )}
                </Text>
                <Text tag="p" size="m" color="almost-black">
                    {t('help@avangardbank.ru')}
                </Text>
            </div>
        </>
    );
};
export default ModalContacts;
