import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImageProps } from "@mandyhellz-design-system/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    isLoggedOut: false,
    src: "https://avatars.githubusercontent.com/u/77729852?v=4",
    alt: "MandyHellz",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarImageProps>;

export const LoggedIn: StoryObj<AvatarImageProps> = {};

export const LoggedOut: StoryObj<AvatarImageProps> = {
  args: {
    isLoggedOut: true,
  },
};
