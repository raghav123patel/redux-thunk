import {useQuery} from '@apollo/client';
import GET_PRODUCTS from "../graphqls/queries/getUsers";
function ProductList() {
const {loading, data, error} = useQuery(GET_PRODUCTS);

if(loading ) return <p>Loading books....</p>
if(error) return <p>error: {error.message}</p>
console.log(data,"dasjfkljfl");
return(   
    <ul>
        {data.countries.map((item,index) => (
            <li key={index}>{item.__typename} <br/> {item.currency} <br/> {item.currencySymbol}</li>
        ))}    
    </ul>      
)      
}          

export default ProductList;        