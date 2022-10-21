import type { Meta, StoryObj } from "@storybook/react";
import { MultiStep, MultiStepProps } from "@design-system-ui/react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
