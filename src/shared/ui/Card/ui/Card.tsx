import type { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Card.module.scss';

interface CardProps {
    color?: 'white' | 'black' | 'yellow';
    bgColor?: 'none' | 'white' | 'light-yellow';
    gap?: 'small' | 'medium' | 'large';
    broadRadius?: 'none' | 'extra-small' | 'small' | 'medium';
    padding?: 'none' | 'small' | 'medium' | 'large';
    direction?: 'row' | 'column';
    align?: 'center' | 'left' | 'right';
    justify?: 'space-between' | 'space-evenly' | 'space-center';
    marginBottom?: '15' | '20' | '40' | '60' | '85' | '100' | '120';
    marginTop?: '85' | '100' | '120';
    children: ReactNode;
    className?: string;
}

export const Card = ({
    color = 'black',
    bgColor = 'none',
    gap = 'small',
    broadRadius = 'none',
    padding = 'small',
    direction,
    align,
    justify,
    marginBottom,
    marginTop,
    children,
    className,
}: CardProps) => {
    const cardClass = classNames(
        styles.Card,
        {
            [styles[`color-${color}`]]: color,
            [styles[`bg-color-${bgColor}`]]: bgColor,
            [styles[`gap-${gap}`]]: gap,
            [styles[`${broadRadius}-border-radius`]]: broadRadius,
            [styles[`${padding}-padding`]]: padding,
            [styles[direction]]: direction,
            [styles[align]]: align,
            [styles[justify]]: justify,
            [styles[`marginTop${marginTop}`]]: marginTop,
            [styles[`marginBottom${marginBottom}`]]: marginBottom,
        },
        [className],
    );

    return <div className={cardClass}>{children}</div>;
};
