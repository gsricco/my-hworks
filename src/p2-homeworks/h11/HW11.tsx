import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import RangeSlider from "./common/c8-SuperDoubleRange/RangeSlider";
import s from './common/c8-SuperDoubleRange/SuperDoubleRange.module.css'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100);
    const [value3, setValue3] = React.useState<number[]>([value1, value2]);
    const onChangeRange = (value: number) => {
        setValue1(value);
        const [a, b] = value3
        setValue3([value, b])
        setValue2(value3[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                />

            </div>
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange} value={value1}/>
            </div>

            <div className={s.double}>
                <span>{value1}</span>
                < SuperDoubleRange
                    value1={value1}
                    value3={value3}
                    setValue1={setValue1}
                    setValue3={setValue3}
                    setValue2={setValue2}/>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
