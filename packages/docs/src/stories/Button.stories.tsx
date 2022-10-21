import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonRootProps } from "@design-system-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button.Root,
  args: {
    children: "Send",
    variants: "primary",
  },
  argTypes: {
    variants: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta<ButtonRootProps>;

export const Primary: StoryObj<ButtonRootProps> = {};

export const Secondary: StoryObj<ButtonRootProps> = {
  args: {
    variants: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<ButtonRootProps> = {
  args: {
    variants: "tertiary",
    children: "Cancel",
  },
};

export const PrimaryWithIcon: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const SecondaryWithIcon: StoryObj<ButtonRootProps> = {
  args: {
    variants: "secondary",
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
