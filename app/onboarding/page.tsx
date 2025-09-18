"use client";

import First from "../components/form/First";
import { useState } from "react";
import Second from "../components/form/Second";
import Third from "../components/form/Third";
import Forth from "../components/form/Forth";
import Fifth from "../components/form/Fifth";
import SelectStyle from "../components/form/SelectStyle";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

export default function OnBoardingPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Forth />;
      case 5:
        return <Fifth />;
      case 6:
        return <SelectStyle />;
      default:
        return <First />;
    }
  };

  return (
    <div>
      {renderStep()}
      <div className={`w-full mt-4 ${"flex gap-2"} `}>
        {step > 1 ? <SecondaryButton label="Back" onClick={prevStep} /> : ""}
        <PrimaryButton label="Continue" onClick={nextStep} />
      </div>
    </div>
  );
}
