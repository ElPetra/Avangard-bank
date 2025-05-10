import { useTranslation } from 'react-i18next';

export const getSlideContents = () => {
    const { t } = useTranslation();
    return [
        {
            title: t('Узнайте больше о крупнейшем банке России'),
            buttonLabel: t('Подробнее'),
        },
        {
            title: t('Мобильное приложение Avangard Online'),
            description: t('Управляйте всеми услугами банка не выходя из дома'),
            buttonLabel: t('Узнать больше'),
        },
        {
            title: t('Быстрое оформление карты: дебетовые, кредитные'),
            buttonLabel: t('Подробнее'),
        },
        {
            title: t('Делай переводы и оплачивай покупки не выходя из дома'),
            buttonLabel: t('Узнать больше'),
        },
    ];
};
