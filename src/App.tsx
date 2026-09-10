import { useState } from 'react'
import  './App.css'
import {loadCompanies, saveCompanies} from './lib/storage'
import type { Company } from './types'

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
      <p>
        {companies.length} companies
      </p>
      <button onClick={handleAdd}>Add test company</button>
  </>
  );
}

export default App