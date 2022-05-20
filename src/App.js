import { useEffect, useState } from 'react';
import UsersForms from './components/UsersForms'
import UsersList from './components/UsersList'
import axios from 'axios'
import './App.css';

function App() {
  const[userSelected,setUsersSelected]=useState(null)
  const[users,setUsers]=useState([])

  useEffect(()=>{
    
     axios.get(`https://users-crud1.herokuapp.com/users/`)
     .then(res=>setUsers(res.data))
     
  
  },[])
  
  const getUsers=()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res=>setUsers(res.data))
    
    }
    const removeUsers=(id)=>{
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(()=>getUsers())
     
    
    }
 //userForms
 const selectedUsers =(user)=>setUsersSelected(user)
 const deselectedUsers=()=>setUsersSelected(null)

  return (
    <div className="App">
      <UsersForms getUsers={getUsers} userSelected={userSelected} deselectedUsers={deselectedUsers}/>
      <UsersList users={users} selectedUsers={selectedUsers} removeUsers={removeUsers}/>
    </div>
  );
}

export default App;
