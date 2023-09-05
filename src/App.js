import Header from './components/Header';
import Form from './components/Form'
import Table from './components/Table';
import { useState } from 'react';

function App() {

  const [yearlyData, setYearlyData] = useState([])

  const yearlyDataHandler = (yearlyDataParam) => {
    setYearlyData(yearlyDataParam)
  }

  return (
    <div>
      <Header />
      <Form throwInvestmentValues={yearlyDataHandler}/>
      <Table yearlyInvestInformation={yearlyData}/>
    </div>
  );
}

export default App;
