import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type RangeSliderProps = {
    value1: number
    value3: number[]
    setValue1: (value1: number) => void
    setValue2: (value2: number) => void
    setValue3: (value3: number[]) => void
}

export default function RangeSlider(props: RangeSliderProps) {
    const handleChange = (event: Event, newValue: number | number[]) => {
        props.setValue3(newValue as number[]);
        props.setValue1(props.value3[0])
        props.setValue2(props.value3[1])

    };

    return (
        <Box sx={{width: 300, paddingRight: 5}}>
            <Slider
                value={props.value3}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}
