import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './CardItem.module.scss';

interface CardItemProps {
    children: ReactNode;
    padding?: '40';
    flexDirection?: 'row' | 'column';
    gap?: 'xs' | 's' | 'sm' | 'm' | 'l';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justify?: 'space-between' | 'space-evenly' | 'space-center';
    flex?: '25%' | '33.33%' | '50%';
    wrap?: 'wrap';
    flexGrow?: 'grow';
    bgColor?:
        | 'none'
        | 'transparent'
        | 'white'
        | 'black'
        | 'gray'
        | 'light-yellow'
        | 'yellow';
    borderRadius?: 'extra-small' | 'small' | 'medium';
    border?: 'solidWhite' | 'solidBlack';
    className?: string;
}

export const CardItem = ({
    children,
    padding,
    flexDirection = 'column',
    gap,
    alignItems = 'center',
    justify,
    wrap,
    flex,
    flexGrow,
    bgColor,
    borderRadius,
    border,
    className,
}: CardItemProps) => {
    const cardItemClass = classNames(
        styles.CardItem,
        {
            [styles.padding]: padding,
            [styles[`flexDirection-${flexDirection}`]]: flexDirection,
            [styles[`gap-${gap}`]]: gap,
            [styles[`alignItems-${alignItems}`]]: alignItems,
            [styles[justify]]: justify,
            [styles[wrap]]: wrap,
            [styles.flexGrow]: flexGrow === 'grow',
            [styles[`flex-${flex?.replace('.', '-')?.replace('%', '')}`]]: flex,
            [styles[`bgColor-${bgColor}`]]: bgColor,
            [styles[`borderRadius-${borderRadius}`]]: borderRadius,
            [styles[`border-${border}`]]: border,
        },
        [className],
    );
    return <div className={cardItemClass}>{children}</div>;
};
