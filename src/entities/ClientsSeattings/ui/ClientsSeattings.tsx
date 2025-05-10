import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'widgets/LangSwitcher/indext';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/icons';
import { CardItem } from 'shared/ui/CardItem';
import { classNames } from 'shared/lib/classNames/classNames';
import * as styles from './ClientsSeattings.module.scss';

export const ClientsSeattings = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.clinets__panel_info)}>
            <div className={classNames(styles.clinets__panel_info_left)}>
                <Icon icon="clientDefault" widthAndHeight={205} />
                <Button type="button" size="medium" variant="primary">
                    {t('Добавить фото')}
                </Button>
                <CardItem flexDirection="row">
                    <Icon icon="trash" widthAndHeight={16} />
                    <Button type="button" variant="link">
                        {t('Удалить')}
                    </Button>
                </CardItem>
            </div>

            <div className={classNames(styles.clinets__panel_info_right)}>
                <Text color="black" size="xs">
                    {t('Язык')}
                </Text>
                <LangSwitcher blackText />
            </div>
        </div>
    );
};
