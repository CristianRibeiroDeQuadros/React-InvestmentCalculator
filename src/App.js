import Header from './components/Header';
import Form from './components/Form'
import Table from './components/Table';
import NoDataYet from './components/NoDataYet';
import { useState } from 'react';

function App() {

  //The state below provides the values that will be displayed in the "table" component
  const [yearlyData, setYearlyData] = useState([])

  //Function that sets the new state for the hook above
  const yearlyDataHandler = (yearlyDataParam) => {
    setYearlyData(yearlyDataParam)
  }

  return (
    <div>
      <Header />
      <Form throwInvestmentValues={yearlyDataHandler}/>
      {yearlyData.length > 0 ? <Table yearlyInvestInformation={yearlyData}/> : <NoDataYet />}
    </div>
  );
}

export default App;
