import './InputGroup.css'

const InputGroup = (props) => {

    //General onChange handler function that will receite the input ID and the value entered in the field to lift them up dinamically to the "form" component
    const inputChangeHandler = (inputId, value) => {
        //The function call below lifts the value entered in the input field to the "form" component
        props.inputUpdate(inputId, value)
    }
    
    return (
        <div>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={(event) => {inputChangeHandler('current-savings', event.target.value)}} value={props.valueCurrentInvestment}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={(event) => {inputChangeHandler('yearly-contribution', event.target.value)}} value={props.valueYearlyContribution} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={(event) => {inputChangeHandler('expected-return', event.target.value)}} value={props.valueExpectedReturn}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={(event) => {inputChangeHandler('duration', event.target.value)}} value={props.valueDuration}/>
                </p>
            </div>
        </div>
    )
}

export default InputGroup;