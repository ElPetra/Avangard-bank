import { useTranslation } from 'react-i18next';

import { CardItem } from 'shared/ui/CardItem';
import { Icon } from 'shared/ui/icons';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './MobileAdv.module.scss';

interface MobileAdvProps {
    className?: string;
}

export const MobileAdv = ({ className }: MobileAdvProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.mobileAdv, {}, [className])}>
            <div className={classNames(styles['mobileAdv-title'])}>
                {t('Скачать мобильный банк Avangard Online')}
            </div>
            <div className={classNames(styles['mobileAdv-links'])}>
                <CardItem
                    className="pd-7-11 responsive-icon"
                    bgColor="black"
                    borderRadius="small"
                    border="solidWhite"
                >
                    <Icon icon="appStore" width="100%" />
                </CardItem>
                <CardItem
                    className="pd-7-11 responsive-icon"
                    bgColor="black"
                    borderRadius="small"
                    border="solidWhite"
                >
                    <Icon icon="googlePlay" width="100%" />
                </CardItem>
            </div>
        </div>
    );
};
