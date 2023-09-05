import { useState } from 'react';
import './Form.css'
import InputGroup from './InputGroup';

const Form = (props) => {

    const [currentSavingsCapture, setCurrentSavingsCapture] = useState('')
    const [yearlyContributionCapture, setYearlyContributionCapture] = useState('')
    const [expectedReturnCapture, setExpectedReturnCapture] = useState('')
    const [durationCapture, setDurationCapture] = useState('')

    const currentSavingsCaptureFunction = (currentSavingsParam) => {
        setCurrentSavingsCapture(currentSavingsParam)
    }

    const yearlyContributionCaptureFunction = (yearlyContributionParam) => {
        setYearlyContributionCapture(yearlyContributionParam)
    }

    const expectedReturnCaptureFunction = (expectedReturnParam) => {
        setExpectedReturnCapture(expectedReturnParam)
    }

    const durationCaptureFunction = (durationParam) => {
        setDurationCapture(durationParam)
    }

    const calculateHandler = (userInput) => {
        userInput.preventDefault()
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = []; // per-year results

        let currentSavings = +currentSavingsCapture // feel free to change the shape of this input object!
        const yearlyContribution = +yearlyContributionCapture // as mentioned: feel free to change the shape...
        const expectedReturn = +expectedReturnCapture / 100;
        const duration = +durationCapture

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
            });
        }

        // do something with yearlyData ..
        props.throwInvestmentValues(yearlyData)

    };

    const resetHandler = () => {
        props.throwInvestmentValues([])
        setCurrentSavingsCapture('')
        setYearlyContributionCapture('')
        setExpectedReturnCapture('')
        setDurationCapture('')
    }

    return(
        <form className="form" onSubmit={calculateHandler}>
            <InputGroup 
                currentSavingsInput={currentSavingsCaptureFunction}
                yearlyContributionInput={yearlyContributionCaptureFunction}
                expectedReturnInput={expectedReturnCaptureFunction}
                durationInput={durationCaptureFunction}                
                valueCurrentInvestment={currentSavingsCapture}
                valueYearlyContribution={yearlyContributionCapture}
                valueExpectedReturn={expectedReturnCapture}                
                valueDuration={durationCapture}
            />
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler} >
                    Reset
                </button>
                <button type="submit" className="button" >
                    Calculate
                </button>
            </p>
        </form>
    )

}

export default Form;
