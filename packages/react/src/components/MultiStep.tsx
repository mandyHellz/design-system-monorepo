import { ReactNode } from "react";
import { Text } from "./Text";

export interface MultiStepProps {
  currentStep?: number;
  size: number;
}

export interface MultiStepStepsProps {
  children: ReactNode;
  size: number;
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

      {size > 0 && (
        <MultiStepSteps size={size}>
          {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
            return <MultiStepStep key={step} active={currentStep >= step} />;
          })}
        </MultiStepSteps>
      )}
    </div>
  );
};

const MultiStepSteps = ({ children, size }: MultiStepStepsProps) => {
  return (
    <div className={`w-full gap-2 mt-1 grid grid-cols-${size}`}>{children}</div>
  );
};

const MultiStepStep = ({ active }: MultiStepStepProps) => {
  return (
    <div
      className={`h-1 rounded max-w-20 ${
        active ? "bg-gray-100" : "bg-gray-600"
      }`}
    ></div>
  );
};

MultiStepSteps.displayName = "MultiStep.Steps";
MultiStepStep.displayName = "MultiStep.Step";
