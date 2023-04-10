import React from 'react';
import style from './style.module.css';

// list props

const Avatar = ({...props}) => {
    return (
        <>
            <img className={style.avatar} {...props} alt={""} width={"200"} height={"200"}/>
            <p>{props.email}</p>
            <p>{props.name}</p>
        </>
    )
}

export default Avatar;