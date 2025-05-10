import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './FormWrapper.module.scss';

interface FormWrapperProps {
    children: ReactNode;
    className?: string;
}

export const FormWrapper = ({ children, className }: FormWrapperProps) => {
    return (
        <div className={classNames(styles.FormWrapper, {}, [className])}>
            {children}
        </div>
    );
};
