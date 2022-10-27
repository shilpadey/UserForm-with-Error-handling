import React,{useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button"
import classes from './UserInput.module.css';
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState()

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        };

        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        props.onAddUsers(enteredUserName,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return(
        <div>
            {error && (
                <ErrorModal
                  title={error.title}
                  message={error.message}
                  onConfirm={errorHandler} 
                />
            )}
            <Card className={classes.input}>
              <form onSubmit={formSubmitHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
              </form>
            </Card>
        </div>
    );
};

export default UserInput;