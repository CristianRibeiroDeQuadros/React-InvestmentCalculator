import './InputGroup.css'

const InputGroup = (props) => {
    
    const onChangeCurrentSavingsHandler = (event) => {
        let currentSavingValue = event.target.value
        props.currentSavingsInput(currentSavingValue)
    }

    const onChangeYearlyContributionHandler = (event) => {
        let currentYearlyContribution = event.target.value
        props.yearlyContributionInput(currentYearlyContribution)
    }

    const onChangeExpectedReturnHandler = (event) => {
        let currentExpectedReturn = event.target.value
        props.expectedReturnInput(currentExpectedReturn)
    }

    const onChangeDurationHandler = (event) => {
        let currentDuration = event.target.value
        props.durationInput(currentDuration)
    }
    
    return (
        <div>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={onChangeCurrentSavingsHandler} value={props.valueCurrentInvestment}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={onChangeYearlyContributionHandler} value={props.valueYearlyContribution} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={onChangeExpectedReturnHandler} value={props.valueExpectedReturn}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={onChangeDurationHandler} value={props.valueDuration}/>
                </p>
            </div>
        </div>
    )
}

export default InputGroup;