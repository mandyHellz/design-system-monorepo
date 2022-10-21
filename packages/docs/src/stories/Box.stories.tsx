import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@mandyhellz-design-system/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testing box element.</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {};
