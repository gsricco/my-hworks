import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    let loading = useSelector<AppStoreType, boolean>(state => state.loadingState.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}

            {loading
                ? (
                    <div style={{paddingLeft: '30px'}}>
                        <img style={{height: '30px'}}
                             src={"https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"}
                             alt={'preloader'}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
