import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'


const UsersForms = ({getUsers,userSelected,deselectedUsers}) => {
    const [first_name,setFirstName]=useState("")
    const [last_name,setLastName]=useState("") 
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[birthday,setBirthday]=useState("")
    const submit= (e)=>{
        e.preventDefault()
const addUsers={
      
        first_name:first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,

       }
      
 if(userSelected!==null){
    alert("editando....")
     axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,addUsers)
   .then(()=>getUsers())
   deselectedUsers()
 }else{
     axios.post(`https://users-crud1.herokuapp.com/users/`,addUsers)
    .then(()=>getUsers())
    .catch((error) => console.log(error.response));
 }
    }
useEffect(()=>{
if(userSelected !== null){
setFirstName(userSelected.first_name)
setLastName(userSelected.last_name)
setEmail(userSelected.email)
setPassword(userSelected.password)
setBirthday(userSelected.birthday)
}


},[userSelected])
    return (
    
        <div className="card_form">
            <form onSubmit={submit} >
            <div className="row g-3">
                
                <div className="col">
                <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" className="form-control" 
                    onChange={(e)=>setFirstName (e.target.value)}value={first_name}
                    /> 
                </div>
                <div className="col">
                <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" className="form-control" 
                    onChange={(e)=>setLastName (e.target.value)}value={last_name}
                    /> 
                </div>
                </div>
                 <label htmlFor="email">Email</label>
                 <input type="email"id='email'onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                     />

                 <label htmlFor="password">Password</label>
                 <input type="password" id="password"
                 onChange={(e)=>setPassword(e.target.value)}value={password}
                     /> 

                 <label htmlFor="birthday">Birthday</label>
                 <input type="date" id="birthday"onChange={(e)=>setBirthday(e.target.value)}value={birthday}
                     /> 
                 <button  className="btn btn-primary">
                       Submit
                 </button>
            </form>
        </div>
    );
};

export default UsersForms;