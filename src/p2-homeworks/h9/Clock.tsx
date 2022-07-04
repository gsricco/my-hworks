import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {   // можно +setInterval
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const stringTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` // fix with date
    const stringDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` // fix with date
    // const stringTime = date?.toLocaleTimeString()||<br/>
    // const stringDate = date?.toLocaleDateString()||<br/>

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
                <div style={{minHeight: '25px'}}>
                    {show && (
                        <div>
                            {stringDate}
                        </div>
                    )}</div>
            </div>
            {/*{   show
                ?(<div>{stringDate}</div>)
                :(<br/>)
            }*/}
            <SuperButton onClick={start} >start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
