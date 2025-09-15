import { useQuery } from "@apollo/client";
import { GET_COUNTRIESDETAIL } from "../graphqls/queries/getUsers";
function GetCountries() {
    const {data, loading, error} = useQuery(GET_COUNTRIESDETAIL);

    if(loading) <p> details loading...</p>
    if(error) <p> error is: {error.message}</p>
    console.log(data);
    return(
        <>
        <ul>
            {data.countries.map((item,index) => (
                <li key={index} > {item.phoneCode} <br/> {item.name} <br/> {item.currency}</li>     
            ))}                         
        </ul>                
        </>   
    )                 
}  

export default GetCountries; 