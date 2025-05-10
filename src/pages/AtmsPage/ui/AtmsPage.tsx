import { useTranslation } from 'react-i18next';
import mapPlug from 'assets/images/MapPlug.png';
import {
    BankPointsListItem,
    TBankPointData,
} from 'entities/BankPointsListItem';
import { Icon } from 'shared/ui/icons';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useState } from 'react';
import { SIDEBAR_SECTIONS } from 'constants/enums/atmsSidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import * as styles from './AtmsPage.module.scss';

// TODO удалить, когда заработает API
const dataPlug: TBankPointData[] = [
    {
        name: 'Отделение №7',
        type: 'bankOffice',
        address: 'Москва, просп. Независимости, 13-А',
        operatingMode: [9, 16],
        distance: '100',
    },
    {
        name: 'Терминал',
        type: 'terminal',
        address: 'Москва, просп. Независимости, 13-А',
        operatingMode: 24,
        distance: '304',
    },
    {
        name: 'Терминал №7',
        type: 'terminal',
        address: 'Москва, просп. Независимости, 13-А',
        operatingMode: [9, 16],
        distance: '304',
    },
    {
        name: 'Банкомат №7',
        type: 'atm',
        address: 'Москва, просп. Независимости, 13-А',
        operatingMode: [9, 16],
        distance: '304',
    },
    {
        name: 'Отделение №8',
        type: 'bankOffice',
        address: 'Москва, просп. Независимости, 13-А',
        operatingMode: [9, 16],
        distance: '300',
    },
    {
        name: 'Банкомат №8',
        type: 'atm',
        address: 'Москва, просп. Независимости, 13-А',
        operatingMode: [9, 20],
        distance: '304',
    },
];
const cityPlag = 'Москва';

const AtmsPage = () => {
    const [mode, setMode] = useState<'filter' | 'points'>('points');
    const { t } = useTranslation();
    const timeNow = Date.now();
    const sidebarRenderInside =
        mode === 'points' ? (
            <div className={styles.list}>
                {dataPlug.map((point) => (
                    <BankPointsListItem
                        key={point.name}
                        point={point}
                        timeNow={timeNow}
                    />
                ))}
            </div>
        ) : (
            <div className={styles.sectionList}>
                <div className={styles.sections}>
                    <b>
                        {t('atms and branches')} {t('in the locality')}
                    </b>
                    <h6>
                        <Icon icon="locationYellow" width="24px" />
                        {cityPlag}
                    </h6>
                </div>
                {SIDEBAR_SECTIONS.map((section) => (
                    <div
                        className={
                            section === SIDEBAR_SECTIONS.at(-1)
                                ? classNames(styles.sections, {}, [styles.last])
                                : styles.sections
                        }
                        key={section[0]}
                    >
                        <b>{t(section[0])}</b>
                        <div className={styles.chapterList}>
                            {section[1].map((item) => (
                                <div key={item.name}>
                                    <p className={styles.icon}>
                                        <Icon icon={item.icon} width="24px" />
                                    </p>
                                    {t(item.name)}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    return (
        <div className={styles.AtmsPage}>
            <div className={classNames('overlay', {}, [styles.overlay])} />

            <div className={styles.container}>
                <Button
                    onClick={() =>
                        setMode((prev) =>
                            prev === 'filter' ? 'points' : 'filter',
                        )
                    }
                    className={styles.button}
                >
                    <div className={styles.buttonInside}>
                        <div className={styles.buttonIcon}>
                            <Icon icon="stack" width="18px" />
                        </div>
                        <span>
                            {mode === 'points'
                                ? t('filters')
                                : t('atms and branches')}
                        </span>
                    </div>
                </Button>
                <section className={styles.sidebar} key={mode}>
                    <div className={styles.filterCont}>
                        <Input
                            placeholder="search by address"
                            className={styles.filter}
                        />
                        <div className={styles.magnifier}>
                            <Icon icon="magnifier" width="18px" />
                        </div>
                    </div>
                    {sidebarRenderInside}
                </section>
                <section className={styles.image}>
                    <img src={mapPlug} alt="map" />
                </section>
            </div>
        </div>
    );
};

export default AtmsPage;
