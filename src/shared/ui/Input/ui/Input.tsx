import { useTranslation } from 'react-i18next';
import { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = ({
    className,
    placeholder,
    ...otherProps
}: InputProps) => {
    const { t } = useTranslation();

    return (
        <input
            placeholder={t(placeholder)}
            className={classNames(styles.Input, {}, [className])}
            {...otherProps}
        />
    );
};
