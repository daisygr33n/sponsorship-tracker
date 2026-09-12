//COMPONENT (starts with caps)- takes props and returns JSX 
//Component receives one argument which is an object holding its props
//Takes a companies: Company[] prop, reutrns a <table>

import type { Company } from '../types'
import CompanyRow from './CompanyRow'

//objects need their shaped described by interface
interface CompanyTableProps {
    companies: Company[]
}

function CompanyTable({companies}: CompanyTableProps){ //destructuring the object to pull property out (companies instead of props.companies)
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <th>Category</th>
                </tr>
                <tr>
                    <th>Contact Email</th>
                </tr>
                <tr>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {/* map runs company => (...) once per element*/}
                {/* creates a CompanyRow element with key and a prop called company'
                        React strips key out for when state changes */}
                {companies.map(c => (
                    <CompanyRow key={c.id} company={c}/>  
                ))}
            </tbody>
        </table>

    );
}

export default CompanyTable

//When React sees <CompanyTable /> it checks the first character: uppercase means "look up 
//a variable by that name and call it", lowercase means "this is a literal HTML tag".
//App uses CompanyTable, which uses CompanyRow
//Every valid JS file is valid TS

/* const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); 
 map runs function 3 times  ^function^ */

 //companies is the array holding all of them; Company describes what one looks like.