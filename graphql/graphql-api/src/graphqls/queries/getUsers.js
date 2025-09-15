import { gql} from '@apollo/client';
const GET_PRODUCTS = gql`
query Countries  {
       countries
       {
       currency
    currencyName
    currencySymbol  
     
  
      }            
            

}
`  

export const GET_CITIES = gql`
   query Cities($citiesId: ID!){
   cities(id: $citiesId){
         id 
         name                     
   }
   }         
`
     

export const GET_COUNTRIESDETAIL = gql`

query countriesDetail {
      countries {
      phoneCode 
      name 
      currency
      }
}
`

export const GET_COUNTRIES = gql`
   query CountriesDetails {
   countries { 

     name
     phoneCode
     currencyName
     currencySymbol
     currency
   }
   }

`
export default GET_PRODUCTS;  