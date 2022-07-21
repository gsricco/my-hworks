import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, Theme} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'crazy'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.themesState.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: Theme) => {
        dispatch(changeThemeC(theme))
    }
    console.log(theme)

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12  ChangeThemeColor
            </span>

            {/*<Span theme={theme} >*/}
            {/*    homeworks 12  ChangeThemeColor*/}
            {/*    <b className={'hello'}></b>*/}
            {/*</Span>*/}


            <SuperRadio
                name={'themes color'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
// const Span = styled.span<{theme: string}>`
//     color: ${props => props.theme === 'dark' ? red : green};
//   .hello {}
// `