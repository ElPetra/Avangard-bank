import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClientsNavbar } from './ClientsNavbar';

export default {
    title: 'widgets/Navbar',
    component: ClientsNavbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ClientsNavbar>;

const Template: ComponentStory<typeof ClientsNavbar> = (args) => (
    <ClientsNavbar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
