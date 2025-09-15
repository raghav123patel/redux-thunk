import { useQuery } from "@apollo/client";
import { GET_CITIES } from "../graphqls/queries/getUsers";



function GetCities() {
 const {loading, data, error} = useQuery(GET_CITIES, {
    variables: {citiesId: "102"}
 });
 if(loading ) return <p>Loading city....</p>
if(error) return <p>error: {error.message}</p>
console.log(data,"dasjfkljfl");         
}      

export default GetCities;                                         