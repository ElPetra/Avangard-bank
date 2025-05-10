import { FC, ReactNode } from 'react';
import { Field } from 'formik';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { CardItem } from 'shared/ui/CardItem';
import { Input } from 'shared/ui/Input';

import * as styles from './RecoveryEmail.module.scss';

interface RecoveryEmailProps {
    label: string;
    fieldName: string;
    errorMessage?: string | ReactNode | null;
}

export const RecoveryEmail: FC<RecoveryEmailProps> = ({
    label,
    fieldName,
    errorMessage,
}) => {
    const { t } = useTranslation('forgot-password');

    return (
        <Card justify="space-between" padding="none" className={styles.margin}>
            <CardItem className={styles.recovery_cardItem}>
                <Text color="dark-gray">{t(label)}</Text>
                <Field
                    as={Input}
                    placeholder={t('Введите значение')}
                    name={fieldName}
                    type="text"
                    className="regInput"
                />
                {errorMessage && (
                    <div className={styles.error_message}>
                        <Text color="error" size="xxs" align="center">
                            {typeof errorMessage === 'string'
                                ? t(errorMessage as string)
                                : errorMessage}
                        </Text>
                    </div>
                )}
            </CardItem>
        </Card>
    );
};
