import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

import * as styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className="overlay">
            <div className={classNames(styles.ErrorPage, {}, [])}>
                <p>{t('Произошла непредвиденная ошибка')}</p>
                <Button
                    className={classNames(styles.ErrorPage__btn, {}, [])}
                    onClick={reloadPage}
                >
                    {t('Обновить страницу')}
                </Button>
            </div>
        </div>
    );
};
