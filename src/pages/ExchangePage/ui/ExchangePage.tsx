import { useTranslation } from 'react-i18next';

const ExchangePage = () => {
    const { t } = useTranslation();

    return (
        <div className="tempStyles">
            <h2>Страница находится в разработке</h2>
            <div>{t('Курсы валют')}</div>
        </div>
    );
};

export default ExchangePage;
