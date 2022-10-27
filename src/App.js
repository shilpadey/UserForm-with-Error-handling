import React, { useState } from 'react';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';


function App() {
  const [usersList,setUsersList] = useState([]);
  const addUserDataHandler = (uName,uAge) =>{
    
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {name:uName, age:uAge, id:Math.random().toString()}
      ];
    });

  };
  
  return (
    <div>
      <UserInput onAddUsers={addUserDataHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
