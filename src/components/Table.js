import './Table.css'

const Table = (props) => {
    
    const investmentInformation = props.yearlyInvestInformation;
    
    const tableRows = (year, totalSavings, interestYear, investedCapital) => {
        return(
            <tr key={year}>
                <td>{year}</td>
                <td>{totalSavings}</td>
                <td>{interestYear}</td>
                <td>{investedCapital}</td>
            </tr>
        )
    }

    return(
        /* Todo: Show below table conditionally (only once result data is available) */
        /* Show fallback text if no data is available */

        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
                {investmentInformation.map(item => (
                    tableRows(item.year, item.savingsEndOfYear, item.yearlyInterest, 50)
                ))}
            </tbody>            
        </table>
        
    )
}

export default Table;