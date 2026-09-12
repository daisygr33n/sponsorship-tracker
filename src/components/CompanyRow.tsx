//COMPONENT- takes props and returns JSX
//Takes one company prop, returns a <tr> with cells 

import type { Company } from '../types'

interface CompanyRowProps {
  company: Company;
  onDelete: (id:string) => void;
}

function CompanyRow({ company, onDelete }: CompanyRowProps) {
  return (
  <tr>
    <td>{company.name}</td>
    <td>{company.category}</td>
    <td>{company.contactEmail ?? '-'}</td>
    <td>{company.status}</td>
    <td> <button onClick={()=>onDelete(company.id)}>DELETE</button></td>
  </tr>

  
);}

export default CompanyRow


