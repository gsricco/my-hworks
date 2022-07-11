import React from 'react';
import s from './Junior.module.css'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";


const Junior = () => {
    return (
        <div className={s.page}>
            {/* <h1 className={s.title}>Sorry...<br/>Page Junior<br/>is currently under development</h1>
            <div><img  src="https://c.tenor.com/erbSWaDG1EUAAAAi/stitch-cute.gif" alt="error animation"/></div>*/}
            <div><HW7/></div>
            <div><HW8/></div>
            <div><HW9/></div>
            <HW10/>
            <HW11/>

        </div>
    );
};

export default Junior;

