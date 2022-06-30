import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | null>('Name is required, please')

    const setNameCallback = (e: string) => {
        if (name !== '') {
            setName(e);
        } else {
            setError('Name is required, please');
            setName(e);
        }
    }
    const addUser = () => {
        if (name.trim() !== '') {
            setError(null)
            alert(`Hello, ${name.trim()}!!! `);
            setName('');
            addUserCallback(name.trim());
        } else {
            setError('Name is required, please')
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
