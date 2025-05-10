import React from 'react';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './SliderContent.module.scss';

interface SliderContentProps {
    title: string;
    description?: string;
    buttonLabel: string;
    onButtonClick: () => void;
    className?: string;
}

export const SliderContent: React.FC<SliderContentProps> = ({
    title,
    description,
    buttonLabel,
    onButtonClick,
    className,
}) => {
    return (
        <div className={classNames(styles.SliderContent, {}, [className])}>
            <Text tag="h1" size="xl" weight="extra-bold" marginBottom="60">
                {title}
            </Text>
            {description && (
                <Text size="m" marginBottom="30">
                    {description}
                </Text>
            )}
            <Button variant="primary" size="medium" onClick={onButtonClick}>
                {buttonLabel}
            </Button>
        </div>
    );
};
