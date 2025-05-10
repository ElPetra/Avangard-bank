import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import * as styles from './ClientsPanelTabs.module.scss';

interface ClientsPanelTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ClientsPanelTabs = ({
    activeTab,
    setActiveTab,
}: ClientsPanelTabsProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.clinets__panel_tabs, {}, [])}>
            <Button
                type="button"
                isActive={activeTab === 'personal'}
                onClick={() => setActiveTab('personal')}
            >
                {t('Личные данные')}
            </Button>
            <Button
                type="button"
                isActive={activeTab === 'documents'}
                onClick={() => setActiveTab('documents')}
            >
                {t('Мои документы')}
            </Button>
            <Button
                type="button"
                isActive={activeTab === 'security'}
                onClick={() => setActiveTab('security')}
            >
                {t('Безопасность')}
            </Button>
            <Button
                type="button"
                isActive={activeTab === 'settings'}
                onClick={() => setActiveTab('settings')}
            >
                {t('Настройки')}
            </Button>
        </div>
    );
};
