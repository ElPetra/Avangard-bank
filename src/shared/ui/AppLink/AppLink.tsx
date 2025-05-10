import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { capitalize } from 'shared/lib/capitalize/capitalize';

import * as style from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    color?: 'black' | 'gray';
    display?: 'block';
    className?: string;
    underline?: boolean;
    underlineColor?: string;
    isActive?: boolean;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        color,
        display,
        className,
        children,
        underline = false,
        underlineColor,
        isActive = false,
        ...otherProps
    } = props;

    const underlineClass = underline
        ? style[`underline${capitalize(underlineColor)}`]
        : '';

    return (
        <Link
            to={to}
            className={classNames(
                style.AppLink,
                {
                    [style.underline]: underline,
                    [style[`color-${color}`]]: color,
                    [style.active]: isActive,
                },
                [className, underlineClass],
            )}
        >
            {children}
        </Link>
    );
};
