import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        className: { control: 'text' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => (
    <LangSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Active = Template.bind({});
Active.args = {
    initialLanguage: 'ru',
};
