import { ReactNode } from "react";
import { Text } from "./Text";

export interface MultiStepProps {
  currentStep?: number;
  size: number;
}

export interface MultiStepStepsProps {
  children: ReactNode;
  size: string;
}

export interface MultiStepStepProps {
  active: boolean;
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Text size="xs" className="text-gray-200">
        Step {currentStep} of {size}
      </Text>

      <MultiStepSteps size={size.toString()}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <MultiStepStep key={step} active={currentStep >= step} />;
        })}
      </MultiStepSteps>
    </div>
  );
};

const MultiStepSteps = ({ children, size }: MultiStepStepsProps) => {
  return (
    <div className={`grid gap-2 mt-1 grid-cols-${size.toString()}`}>
      {children}
    </div>
  );
};

const MultiStepStep = ({ active }: MultiStepStepProps) => {
  return (
    <div
      className={`h-1 rounded ${active ? "bg-gray-100" : "bg-gray-600"}`}
    ></div>
  );
};

MultiStepSteps.displayName = "MultiStep.Steps";
MultiStepStep.displayName = "MultiStep.Step";
