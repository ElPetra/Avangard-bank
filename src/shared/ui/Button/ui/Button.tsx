import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Button.module.scss';

interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    size?: 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'link' | 'normal';
    disabled?: boolean;
    isActive?: boolean;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        type = 'button',
        size,
        variant,
        disabled = false,
        isActive,
        onClick,
        className,
        children,
    } = props;

    const buttonClass = classNames(
        styles.Button,
        {
            [styles[size]]: size,
            [styles[variant]]: variant,
            [styles.active]: isActive,
        },
        [className],
    );

    return (
        <button
            // Пока так (нет идей как поправить ^_^)
            // eslint-disable-next-line react/button-has-type
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={buttonClass}
        >
            {children}
        </button>
    );
};
