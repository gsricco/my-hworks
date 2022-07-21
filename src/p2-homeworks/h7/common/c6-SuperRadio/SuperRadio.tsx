import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../h10/bll/store"
import s from '../../../h12/HW12.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}


const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const theme = useSelector<AppStoreType, string>(state => state.themesState.theme)


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    // console.log(value)
    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            <div className={s[theme + '-radio']}>{theme}</div>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
