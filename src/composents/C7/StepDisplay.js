import React from "react";
import { StyledText1 } from "../Styles/MajorStyles";

function StepDisplay({ step, firstDigit, lastDigit, result, fStep, sStep, tStep }) {
  return (
    <div>
      {step === 1 && (
        <StyledText1 style={{ color: "blue" }}>
          {firstDigit} + {lastDigit} = {result}. Écrivez {fStep}.
          {result >= 10 && fStep !== result ? "retenz 1" : ""}
        </StyledText1>
      )}
      {step === 2 && (
        <StyledText1 style={{ color: "blue" }}>
          {firstDigit} + {lastDigit} = {result}...
          {result >= 10 ? `+(1 retené)=${fStep}` : ""}. Écrivez {sStep}.
          {fStep >= 10 && sStep !== result ? "retenz 1" : ""}
        </StyledText1>
      )}
      {step === 3 && (
        <StyledText1 style={{ color: "blue" }}>
          {firstDigit} + {lastDigit} = {result}...
          {result >= 10 ? `+(1 retené)=${fStep}` : ""}...
          {result >= 10 ? `+(1 retené)=${sStep}` : ""}. Écrivez {tStep}.
          {sStep >= 10 && tStep !== result ? "retenz 1" : ""}
        </StyledText1>
      )}
    </div>
  );
}

export default StepDisplay;