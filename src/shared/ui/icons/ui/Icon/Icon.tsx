import { memo } from 'react';

import type { ImgHTMLAttributes } from 'react';
import { SVG } from '../../model';

import type { SvgIconName } from '../../model';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    icon: SvgIconName;
    width?: number | string;
    height?: number | string;
    widthAndHeight?: number | string;
    className?: string;
}

export const Icon = memo(
    ({
        icon,
        width,
        height,
        widthAndHeight,
        className,
        ...otherProps
    }: IconProps) => (
        <img
            src={SVG[icon]}
            width={widthAndHeight || width || 24}
            height={widthAndHeight || height || 24}
            alt=""
            className={className}
            {...otherProps}
        />
    ),
);
