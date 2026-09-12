//COMPONENT- takes props and returns JSX
//Takes one company prop, returns a <tr> with cells 

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
  </tr>

  
);}

export default CompanyRow


