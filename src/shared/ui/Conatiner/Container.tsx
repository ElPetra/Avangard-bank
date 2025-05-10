import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Container.module.scss';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = memo(({ children, className }: ContainerProps) => (
    <div className={classNames(styles.container, {}, [className])}>
        {children}
    </div>
));
