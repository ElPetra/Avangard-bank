import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { Button } from 'shared/ui/Button';

import * as styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    initialLanguage?: string;
    blackText?: boolean;
}

export const LangSwitcher = ({
    className,
    initialLanguage,
    blackText = false,
}: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const [language, setlanguage] = useState(initialLanguage || i18n.language);

    const toggleLanguage = (lang: string) => {
        if (lang !== i18n.language) {
            i18n.changeLanguage(lang);
            setlanguage(lang);
        }
    };

    return (
        <>
            <Button
                className={classNames(
                    styles.LangSwitcher,
                    {
                        [styles.active]: language === 'ru',
                        [styles['black-text']]: blackText,
                    },
                    [className],
                )}
                onClick={() => toggleLanguage('ru')}
            >
                Ru
            </Button>
            <Button
                className={classNames(
                    styles.LangSwitcher,
                    {
                        [styles.active]: language === 'en',
                        [styles['black-text']]: blackText,
                    },
                    [className],
                )}
                onClick={() => toggleLanguage('en')}
            >
                En
            </Button>
        </>
    );
};
