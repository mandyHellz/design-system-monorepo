import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "@mandyhellz-design-system/react";
import { Envelope } from "phosphor-react";

export default {
  title: "Form/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key={""}>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input key={""} placeholder="email@example.com" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="email@example.com" />,
  },
};
