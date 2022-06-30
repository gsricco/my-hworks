import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.nav}>
            <img src="https://data.whicdn.com/images/244793515/original.gif" alt="error animation"/>
            <div className={s.item}>
                <NavLink to='/pre-junior' activeClassName={s.activeLink}>PRE_JUNIOR</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior' activeClassName={s.activeLink}>JUNIOR</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior-plus' activeClassName={s.activeLink}>JUNIOR_PLUS</NavLink>
            </div>
            <img src="https://i.pinimg.com/originals/15/bc/a4/15bca4c2ceaf34bd303b7f3a74d9b3c8.gif"
                 alt="error animation"/>
        </div>
    )
}

export default Header
