import React from 'react';

const UsersList = ({users,selectedUsers,removeUsers}) => {
    return (
        <div >
            <ul >
              {
               users.map((user)=>(
                <li className="card text-bg-primary mb-3"key={user.id}>
                    <h2> Name : {user.first_name} {user.last_name}</h2>
                    <p>Email : {user.email}</p>
                    <p>Birthday : {user.birthday}</p>

                    <div className="button">

                   <button className="btn btn-warning"onClick={()=>selectedUsers(user)}>Edit</button>
                   <button className="btn btn-danger"onClick={()=>removeUsers(user.id)}>Delete</button>
                    </div>
                </li>
               ))
            }
            </ul>
        </div>
    );
};

export default UsersList;