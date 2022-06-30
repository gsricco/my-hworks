import React from 'react'
import s from './Junior.module.css'
import {NavLink} from "react-router-dom";


function Error404() {
    return (
        <div className={s.pageError}>
            <div>
                <img src="https://data.whicdn.com/images/244793515/original.gif" alt="error animation"/>
            </div>
            <div>This page does not exist.</div>
            <h1>404</h1>
            <div>
                <NavLink to='/pre-junior' activeClassName={s.activeLink}><img
                    src="https://bestanimations.com/media/simpsons/623965317the-simpsons-animated-gif-4.gif"
                    alt="error animation"/><br/>...Try the homepage.</NavLink>
            </div>
        </div>
    )
}

export default Error404
