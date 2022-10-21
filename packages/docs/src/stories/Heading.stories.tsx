import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@design-system-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "base",
    children: "Custom title",
  },
  argTypes: {
    size: {
      options: ["sm", "base", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
