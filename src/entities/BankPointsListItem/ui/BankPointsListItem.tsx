import React from 'react';
import { Icon } from 'shared/ui/icons';
import { useTranslation } from 'react-i18next';
import { num2time } from 'shared/lib/formatNumberToTime/num2time';
import * as styles from './BankPointsListItem.module.scss';

export type TBankPointData = {
    name: string;
    type: 'atm' | 'bankOffice' | 'terminal';
    address: string;
    operatingMode: [number, number] | 24;
    // TODO опционально! Убрать при вкл. запросов с бэка
    distance: string;
};

type TBankPointsListItem = {
    point: TBankPointData;
    timeNow: number;
};

export const BankPointsListItem: React.FC<TBankPointsListItem> = ({
    point,
    timeNow,
}) => {
    const { t } = useTranslation();
    const { address, name, type, operatingMode, distance } = point;
    const isWorking =
        operatingMode === 24
            ? true
            : timeNow > new Date().setHours(operatingMode[0]) &&
              timeNow < new Date().setHours(operatingMode[1]);
    return (
        <div className={styles.BankPointsListItem}>
            <div className={styles.leftSection}>
                <Icon icon={`${type}`} width="100%" />
                <p>
                    {distance} {t('m')}
                </p>
            </div>
            <div className={styles.rightSection}>
                <h6 className={styles.name}>{name}</h6>
                <p>{address}</p>
                <div className={styles.time}>
                    <p
                        className={
                            isWorking ? styles.working : styles.notWorking
                        }
                    >
                        {isWorking ? t('open now') : t('closed now')}
                    </p>
                    <p>
                        {operatingMode === 24
                            ? t('24 hours a day')
                            : `${num2time(operatingMode[0])} - ${num2time(operatingMode[1])}`}
                    </p>
                </div>
            </div>
        </div>
    );
};
