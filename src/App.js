import React, { useState } from 'react';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';


function App() {
  const [usersList,setUsersList] = useState([]);
  const addUserDataHandler = (uName,uAge,uCollege) =>{
    
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {name:uName, age:uAge, college:uCollege , id:Math.random().toString()}
      ];
    });

  };
  
  return (
    <React.Fragment>
      <UserInput onAddUsers={addUserDataHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
