import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import * as styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    step: number;
    steps: string[];
    isForgotPasswordPage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    step,
    steps,
    isForgotPasswordPage,
}) => {
    const { t } = useTranslation('registration');

    return (
        <div className={styles.progressBar}>
            <div className={styles.steps}>
                {steps.map((label, index) => (
                    <div
                        key={label}
                        className={classNames(styles.label, {}, [
                            styles[`label${index + 1}`],
                        ])}
                    >
                        {t(label)}
                    </div>
                ))}
            </div>
            <div className={styles.lineContainer}>
                <div className={styles.connectorWrapper}>
                    <div
                        className={classNames(styles.connector, {
                            [styles.filled]: true,
                        })}
                        style={{ width: `${(step / steps.length) * 100}%` }}
                    />
                    <div
                        className={classNames(styles.connector, {
                            [styles.additional]: true,
                        })}
                    />
                </div>
                <div className={styles.circles}>
                    {steps.map((_, index) => (
                        <div
                            key={steps[index]}
                            className={classNames(
                                styles.circle,
                                {
                                    [styles.completed]: step >= index,
                                    [styles.circle2ForgotPassword]:
                                        isForgotPasswordPage && index === 1,
                                    [styles.circle3ForgotPassword]:
                                        isForgotPasswordPage && index === 2,
                                },
                                [styles[`circle${index + 1}`]],
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import * as styles from './ProgressBar.module.scss';

// interface ProgressBarProps {
//     step: number;
//     steps: string[];
//     isForgotPasswordPage?: boolean;
// }

// export const ProgressBar: React.FC<ProgressBarProps> = ({
//     step,
//     steps,
//     isForgotPasswordPage,
// }) => {
//     const { t } = useTranslation('registration');

//     return (
//         <div className={styles.progressBar}>
//             <div className={styles.steps}>
//                 {steps.map((label, index) => (
//                     <div
//                         key={label}
//                         className={`${styles.label} ${styles[`label${index + 1}`]}`}
//                     >
//                         {t(label)}
//                     </div>
//                 ))}
//             </div>
//             <div className={styles.lineContainer}>
//                 <div className={styles.connectorWrapper}>
//                     <div
//                         className={`${styles.connector} ${styles.filled}`}
//                         style={{ width: `${(step / steps.length) * 100}%` }}
//                     />
//                     <div
//                         className={`${styles.connector} ${styles.additional}`}
//                     />
//                 </div>
//                 <div className={styles.circles}>
//                     {steps.map((_, index) => (
//                         <div
//                             key={steps[index]}
//                             className={`${styles.circle} ${step >= index ? styles.completed : ''} ${styles[`circle${index + 1}`]} ${isForgotPasswordPage && index === 1 ? styles.circle2ForgotPassword : ''} ${isForgotPasswordPage && index === 2 ? styles.circle3ForgotPassword : ''}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
