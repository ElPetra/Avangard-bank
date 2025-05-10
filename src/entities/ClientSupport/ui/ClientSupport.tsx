/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { CardItem } from 'shared/ui/CardItem';
import ModalContacts from '../ModalContacts';

import * as styles from './ClientSupport.module.scss';

// Определяем тип для пропсов компонента
type ClientSupportProps = {
    isOpenModal: boolean;
    setIsOpenModal: (isOpen: boolean) => void;
};

export const ClientSupport: React.FC<ClientSupportProps> = ({
    isOpenModal,
    setIsOpenModal,
}) => {
    const { t } = useTranslation();
    const [modalType, setModalType] = useState<string | null>(null);
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsOpenModal(false);
        }
    };

    useEffect(() => {
        if (isOpenModal) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpenModal]);

    if (!isOpenModal) return null;
    const handleButtonClick = (type: string) => {
        setModalType(type);
    };

    const renderModalContent = () => {
        switch (modalType) {
            case 'contacts':
                return <ModalContacts />;
                // eslint-disable-next-line no-unreachable
                {
                    /* TODO Заглушка для модального окна "Написать в чат". Сделать компонет, по аналогии ModalContacts и добавить сюда */
                }
            case 'chat':
                return <p>Модальное окно Написать в чат</p>;
                // eslint-disable-next-line no-unreachable
                {
                    /* TODO Заглушка для модального окна "Заказать звонок". Сделать компонет, по аналогии ModalContacts и добавить сюда */
                }
            case 'call':
                return <p>Модальное окно Заказать звонок</p>;
            default:
                return (
                    <>
                        <Text tag="h3" size="l" color="black" weight="bold">
                            {t('Здравствуйте! Вам нужна помощь?')}
                        </Text>
                        <CardItem
                            flexDirection="row"
                            className={styles.clientSupportBtns}
                        >
                            <CardItem className={styles.clientSupportBtnsBlock}>
                                <Button
                                    onClick={() =>
                                        handleButtonClick('contacts')
                                    }
                                    variant="primary"
                                    className={styles.buttonCircle}
                                >
                                    <Icon
                                        icon="phoneIcon"
                                        widthAndHeight={43}
                                    />
                                </Button>
                                <Text
                                    align="center"
                                    color="black"
                                    size="s"
                                    weight="bold"
                                >
                                    {t('Контакты для связи')}
                                </Text>
                            </CardItem>
                            <CardItem className={styles.clientSupportBtnsBlock}>
                                <Button
                                    onClick={() => handleButtonClick('chat')}
                                    variant="primary"
                                    className={styles.buttonCircle}
                                >
                                    <Icon icon="chat" widthAndHeight={43} />
                                </Button>
                                <Text
                                    align="center"
                                    color="black"
                                    size="s"
                                    weight="bold"
                                >
                                    {t('Написать в\nчат')}
                                </Text>
                            </CardItem>
                            <CardItem className={styles.clientSupportBtnsBlock}>
                                <Button
                                    onClick={() => handleButtonClick('call')}
                                    variant="primary"
                                    className={styles.buttonCircle}
                                >
                                    <Icon
                                        icon="ringVolume"
                                        widthAndHeight={43}
                                    />
                                </Button>
                                <Text
                                    align="center"
                                    color="black"
                                    size="s"
                                    weight="bold"
                                >
                                    {t('Заказать звонок')}
                                </Text>
                            </CardItem>
                        </CardItem>
                        <Button
                            variant="primary"
                            size="medium"
                            onClick={() => setIsOpenModal(false)}
                        >
                            <Text
                                align="center"
                                color="black"
                                size="s"
                                weight="bold"
                                marginTop="0"
                            >
                                {t('Не сейчас')}
                            </Text>
                        </Button>
                    </>
                );
        }
    };

    return (
        <Modal
            setIsOpen={setIsOpenModal}
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
        >
            {renderModalContent()}
            {modalType && (
                <Button
                    variant="primary"
                    size="medium"
                    className={styles.buttonBack}
                    onClick={() => setModalType(null)}
                >
                    <Text
                        align="center"
                        color="black"
                        size="s"
                        weight="bold"
                        marginTop="0"
                    >
                        {t('Назад')}
                    </Text>
                </Button>
            )}
        </Modal>
    );
};
function setModalType(type: string) {
    throw new Error('Function not implemented.');
}
