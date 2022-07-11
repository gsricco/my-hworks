import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    // onChangeRange: (value: [number, number]) => void
    value1:number
    value3:number[]
    setValue1:(value1:number)=>void
    setValue2:(value2:number)=>void
    setValue3:(value3:number[])=>void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
         value1,value3,setValue3,setValue2,setValue1,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, newValue: number | number[]) => {

        setValue3(newValue as number[]);
        setValue1(value3[0])
        setValue2(value3[1])

    };

    return (
        <Box sx={{ width: 300, paddingRight:5 }}>
            <Slider
                value={value3}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color="secondary"
            />
        </Box>
    );
}

export default SuperDoubleRange
