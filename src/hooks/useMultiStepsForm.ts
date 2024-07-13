import { ReactElement, useState } from "react";



const useMultiStepsForm = (steps: ReactElement[]) => {

    const [currentStepIdx, setCurrentStepIdx] = useState(0);


    function next() {
        setCurrentStepIdx(idx => {
            if (idx >= steps.length - 1) return idx
            return idx + 1;
        })
    }


    function back() {
        setCurrentStepIdx(idx => {
            if (idx <= 0 ) return idx;
            return idx - 1;
        }
        )
    }


    function goTo(index: number) {
        setCurrentStepIdx(index)
    }


    return {
        steps,
        step : steps[currentStepIdx],
        isFirstStep : currentStepIdx !== 0,
        isLastStep : currentStepIdx === steps.length - 1,
        currentStepIdx ,
        next,
        back ,
        goTo
    }

}

export default useMultiStepsForm;