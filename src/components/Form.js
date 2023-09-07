import { useState } from 'react';
import './Form.css'
import InputGroup from './InputGroup';

const Form = (props) => {

    //Object with the empty keys to be used as values for the inputs
    let initialInputObject = {
        'current-savings': '',
        'yearly-contribution': '',
        'expected-return': '',
        'duration': ''
    }

    //State that defines an object with initial values using the object above
    const [inputObject, setInputObject] = useState(initialInputObject)

    //funtion that is being passed in the "inputUpdate" of the inputGroup component
    const updateState = (inputId, newValue) => {
        let inputChange = inputId
        setInputObject((currentObject) => {
            return{
                ...currentObject,
                [inputChange]: newValue
            }
        })
    }

    //Funtion that formats decimal numbers to brazilian currency
    const toCurrencyFormat = (number) => {
        const formatOptions = {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
        return number.toLocaleString('pt-BR', formatOptions)
    }

    //Function that is triggered when the form is submitted
    const calculateHandler = (userInput) => {
        userInput.preventDefault()

        //Empty array that will receive values to return the investment information
        const yearlyData = [];

        //Variables to get the input values. They will be used to calculate the investment information
        let currentSavings = +inputObject['current-savings']
        const yearlyContribution = +inputObject['yearly-contribution']
        const expectedReturn = +inputObject['expected-return'] / 100;
        const duration = +inputObject['duration']

        //Yearly results calculation (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;

            //Values pushed to the previous empty array
            yearlyData.push({
                year: i + 1,
                yearlyInterest: toCurrencyFormat(yearlyInterest),
                savingsEndOfYear: toCurrencyFormat(currentSavings),
                yearlyContribution: toCurrencyFormat(yearlyContribution),
                totalInvestedCapital: toCurrencyFormat(yearlyInterest+currentSavings)
            });
        }

        //The function call below lifts the state to the "App" componente, where this one is being called
        props.throwInvestmentValues(yearlyData)

    };

    //Function that resets the values when the "reset" button is clicked
    const resetHandler = () => {
        props.throwInvestmentValues([])
        setInputObject(initialInputObject)
    }

    return(
        <form className="form" onSubmit={calculateHandler}>
            <InputGroup 
                inputUpdate={updateState}             
                valueCurrentInvestment={inputObject['current-savings']}
                valueYearlyContribution={inputObject['yearly-conrtibution']}
                valueExpectedReturn={inputObject['expected-return']}
                valueDuration={inputObject['duration']}
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
