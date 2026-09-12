import { useState } from 'react'
import  './App.css'
import {loadCompanies, saveCompanies} from './lib/storage'
import type { Company } from './types'
import CompanyTable from './components/CompanyTable'

//import type is for things that only exist at compile time like interfaces, type aliases, Company
//tells TypeScript "erase this import entirely when compiling".

function App() {
  const [companies, setCompanies] = useState<Company[]>(loadCompanies());

  function handleAdd(){
    const newCompany: Company = {
      id: crypto.randomUUID(),
      name: 'Daisy LTD',
      category: 'quant',
      status: 'follow_up_emailed',
      interactions: [],
    }
    const updated = [...companies, newCompany];
    setCompanies(updated);
    saveCompanies(updated);

  }

  return (
    <>
      <CompanyTable companies={companies}/>
      <button onClick={handleAdd}>Add test company</button>
  </>
  );
}

export default App