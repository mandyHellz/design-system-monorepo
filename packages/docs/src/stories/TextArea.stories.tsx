import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from "@mandyhellz-design-system/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box className="flex flex-col gap-2">
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
