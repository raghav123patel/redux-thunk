
import './App.css'
import UserList from './components/userList'
import GetCities from './components/getCities'
import AddUser from './components/addUser'
//import GetCountries from './components/getCountries'
function App() {
 

  return (
    <>
      <UserList/>
      <GetCities/> 
      {/* <GetCountries/>      */} 
      <AddUser/>
    </>
  )           
}

export default App         
