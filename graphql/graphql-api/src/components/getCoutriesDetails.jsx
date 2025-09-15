import {useQuery} from '@apollo/client';
import { GET_COUNTRIES } from '../graphqls/queries/getUsers';
function CountryDetails() {
    const {data, loading, error} = useQuery(GET_COUNTRIES);

    if(loading) <p> loading countries data...</p>
    if(error) <p> error is {error.message}</p>
    console.log( data);
    return(
        <>
        
        <h1> fetching data from the countries api</h1>    
        <ul>
            {data?.countries?.map((item,index) => (
                <li key ={index}> {item.name} <br/> {item.phoneCode} <br/> {item.currencyName} <br/> {item.currencySymbol} <br/> {item.currency}</li>
            ))}   
        </ul>             
        
        </>
    )      
}

export default CountryDetails;       