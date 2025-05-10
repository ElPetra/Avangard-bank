import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import type { ReactNode } from 'react';

import * as styles from './Text.module.scss';

interface TextProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 'xxs' | 'xs' | 'sm' | 's' | 'm' | 'l' | 'xl';
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold';
    width?: 'w300' | 'w330';
    color?: 'white' | 'black' | 'dark-gray' | 'error' | 'almost-black';
    align?: 'center' | 'left' | 'right';
    lineHeight?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'auto';
    display?: 'flex';
    children: ReactNode;
    marginTop?: '20' | '0' | '9' | '25';
    marginBottom?: '130' | '60' | '30' | '16' | '10';
    className?: string;
}

export const Text = memo(
    ({
        tag = 'div',
        size = 's',
        weight = 'regular',
        width,
        align = 'left',
        color = 'white',
        lineHeight,
        children,
        display,
        marginTop,
        marginBottom,
        className,
    }: TextProps) => {
        const Element = tag || 'div';
        const textClass = classNames(
            styles.Text,
            {
                [styles[size]]: size,
                [styles[weight]]: weight,
                [styles[width]]: width,
                [styles[align]]: align,
                [styles[`text-${color}`]]: color,
                [styles[`line-height-${lineHeight}`]]: lineHeight,
                [styles[display]]: display,
                [styles[`marginTop${marginTop}`]]: marginTop,
                [styles[`marginBottom${marginBottom}`]]: marginBottom,
            },
            [className],
        );
        return <Element className={textClass}>{children}</Element>;
    },
);
