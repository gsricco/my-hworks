import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: string) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {
    const inputClass = (name.trim() === '') ? s.error : s.notError;
    const onKeyDownName = (e: React.KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter' && addUser(name))

    return (
        <div className={s.hw3}>
            <input value={name} onChange={(e) => setNameCallback(e.currentTarget.value)}
                   className={inputClass} onKeyDown={onKeyDownName}/>
            <button onClick={() => addUser(name)}>add</button>
            {/*disable={!name}*/}

            <span>Users:{totalUsers}</span>
            <div className={s.span}><span>{(name.trim() === '') && error}</span></div>
        </div>
    )

}

export default Greeting
