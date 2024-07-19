import { useState } from "react";

import BasicDetails from "./components/BasicDetails";
import DocumentCollection from "./components/DocumentCollection";
import InterviewAvailability from "./components/InterviewAvailability";
import StatementPurpose from "./components/StatementPurpose";

function App() {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <>
      {step === 1 && <BasicDetails onNext={handleNext} />}
      {step === 2 && <DocumentCollection onNext={handleNext} />}
      {step === 3 && <StatementPurpose onNext={handleNext} />}
      {step === 4 && <InterviewAvailability />}
    </>
  );
}

export default App;
