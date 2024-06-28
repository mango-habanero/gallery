import type {Meta, StoryObj} from "@storybook/react";

import Avatar from "@components/ui/avatar";

const meta: Meta = {
    title: "UI/Avatar",
    component: Avatar,
}
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story =  {
    args: {
        src: "https://github.com/shadcn.png",
        alt: "some alt text",
    },
}

export const Fallback: Story = {
    args: {
        src: "",
        alt: "some alt text",
    },
}
