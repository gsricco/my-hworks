import React from 'react';
import s from './Message.module.css';

export type MessagePropsType = {
    avatar: string
    message: string
    name: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.container}>
            <div>
                <img className={s.avatar} src={props.avatar} alt=''/>
            </div>
            <div className={s.angle}/>

            <div className={s.mass}>
                <div className={s.name}>{props.name}</div>
                <div className={s.bro}>{props.message}</div>
                <div className={s.time}>{props.time}</div>

            </div>

        </div>
    )
}

export default Message
