import "./addProprety.scss"
import useMultiStepsForm from '../../hooks/useMultiStepsForm'
import InfosForm from "../../components/multiForm/infosForm/InfosForm"

const AddProprety = () => {


    const { steps, step, currentStepIdx, next, goTo, back, isFirstStep, isLastStep } = useMultiStepsForm([
        <InfosForm/>,
        <div>Two</div>,
        <div>Three</div>
    ])

    return (
        <div className='add-proprety'>
            <form className="multi-form" action="">
                <h2>{currentStepIdx + 1}/{steps.length}</h2>
                {step}
                <div className="multi-form___btns">
                    <button onClick={next} type="button">
                        {isLastStep ? 'Finish' : 'Next'}
                    </button>
                    {isFirstStep && <button onClick={back} type="button" >Prev</button>}
                </div>
            </form>
        </div>
    )
}

export default AddProprety