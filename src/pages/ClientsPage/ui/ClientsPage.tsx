import { useState } from 'react';

import { Footer } from 'widgets/Footer';
import { AcountSidebar } from 'widgets/AcountSidebar';
import { ClientsPanelTabs } from 'widgets/ClientsPanelTabs';
import { ClientsPanelInfo } from 'entities/ClientsPanelInfo';
import { ClientsDocuments } from 'entities/ClientsDocuments';
import { ClientsSecurity } from 'entities/ClientsSecurity';
import { ClientsSeattings } from 'entities/ClientsSeattings';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Logo } from 'shared/ui/Logo';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './ClientsPage.module.scss';

interface ClientsPageProps {
    className?: string;
}

export const ClientsPage = ({ className }: ClientsPageProps) => {
    const [activeTab, setActiveTab] = useState('personal');

    const renderActivePanel = () => {
        switch (activeTab) {
            case 'personal':
                return <ClientsPanelInfo />;
            case 'documents':
                return <ClientsDocuments />;
            case 'security':
                return <ClientsSecurity />;
            case 'settings':
                return <ClientsSeattings />;
            default:
                return null;
        }
    };

    return (
        <div className={classNames(styles.ClientsPage, {}, [className])}>
            <div className={classNames(styles.ClientsPage__logo)}>
                <AppLink to="/" underline={false}>
                    <Logo className="fill-black" />
                </AppLink>
            </div>
            <AcountSidebar />
            <div className={classNames(styles.clinets__panel_wrapper, {}, [])}>
                <ClientsPanelTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {renderActivePanel()}
            </div>
            <div className={classNames(styles.footer__wrapper)}>
                <Footer />
            </div>
        </div>
    );
};
