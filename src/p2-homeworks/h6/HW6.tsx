import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './localStorage/HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')


    const save = () => {
        saveState('editable-span-value', value)
    }
    const restore = () => {
        const state = restoreState('editable-span-value', value)
        console.log(state)
        setValue(state)
    }
    // useEffect(restore, []) - по кнопке Restore, если просто при обновлении - добавить useEff

    return (
        <div>
            <hr/>
            homeworks 6
            <div className={s.container}>
                <div><img width={'50px'} height={'50px'}
                          src="https://cliply.co/wp-content/uploads/2021/04/392104010_PENCIL_400px.gif" alt="pencil"/>
                </div>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
            </div>
            <SuperButton className={s.hw6} onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
