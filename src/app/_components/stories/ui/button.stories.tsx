import type {Meta, StoryObj} from "@storybook/react";

import {Button, type ButtonProps} from "@components/ui/button";

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
}
export default meta;

type Story = StoryObj<typeof Button>;

const Template = {
    render: (args: ButtonProps) => <Button {...args}>Button</Button>,
}

export const Default: Story = {
    args: {
        variant: "default",
    },
    ...Template,
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
    ...Template,
}

export const Accent: Story = {
    args: {
        variant: "accent",
    },
    ...Template,
}