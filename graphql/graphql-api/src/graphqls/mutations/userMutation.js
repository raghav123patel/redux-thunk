  import {gql} from '@apollo/client';

 export const ADD_USER = gql`
        mutation createUser($name: String!, $email: String!, $password: String!) {
        
        register(name: $name, email: $email, password: $password){
           email
           name
           password
        }              
        }      
  `

export default ADD_USER;