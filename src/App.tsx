import { useState } from "react"
import StepForm from "./components/stepform/StepForm"
import FinalStep from "./components/stepform/FinalStep"

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [credentials, setCredentials] = useState({})

  return (
    <>
      {currentStep <= 3 &&
        <StepForm 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
          credentials={credentials}
          setCredentials={setCredentials}
        />
      }
      {currentStep > 3 && 
        <FinalStep credentials={credentials} />
      }
    </>
  )
}

export default App
