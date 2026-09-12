//Takes one company prop, returns a <tr> with cells 
//for name, category, ..
//Props are read only, data flows down
import type { Company } from '../types'

interface CompanyRowProps {
  company: Company;
}

function CompanyRow({ company }: CompanyRowProps) {
  return (
  <tr>
    <td>{company.name}</td>
    <td>{company.category}</td>
    <td>{company.contactEmail ?? '-'}</td>
    <td>{company.status}</td>
    <td>{company.amount ?? '-'}</td>
  </tr>

  
);}

export default CompanyRow

