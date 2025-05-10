import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'shared/ui/icons';
import { Button } from 'shared/ui/Button';
import * as styles from './Modal.module.scss';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    setIsOpen: (isOpen: boolean) => void;
};
export const Modal = ({
    onClose,
    children,
    isOpen,
    setIsOpen,
}: PropsWithChildren<ModalProps>) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay}>
            <div className={styles.modalContent}>
                <Button
                    type="button"
                    onClick={onClose}
                    className={styles.clear}
                >
                    <Icon
                        icon="clear"
                        widthAndHeight={50}
                        onClick={() => setIsOpen(false)}
                    />
                </Button>
                {children}
            </div>
        </div>,
        document.getElementById('portalContacts'),
    );
};
