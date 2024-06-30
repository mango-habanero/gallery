import type {Meta, StoryObj} from "@storybook/react";

import {Avatar, AvatarFallback, AvatarImage} from "@components/ui/avatar";
import React from "react";

const meta: Meta = {
    title: "UI/Avatar",
    component: Avatar,
}
export default meta;

type Story = StoryObj<typeof Avatar>;

const Template = {
    render: () => {
        return (
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="The y in Morty" />
                <AvatarFallback>The y in Morty</AvatarFallback>
            </Avatar>
        );
    }
}


export const Default: Story = {
    ...Template,
}


export const Small: Story = {
    args: {
        size: "small",
    },
    ...Template,
}