import React from 'react'
import "./HeaderOptions.css"
import { Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux'
import {selectUser} from "./features/userSlice"

function HeaderOptions({avatar,Icon,title,onClick}) {
    const user=useSelector(selectUser);
    return (
        <div onClick={onClick} className="header-opt" >
            {Icon && <Icon className="header-opt-icon"/>}

            {avatar && 
            <Avatar className="header-opt-icon" src={avatar} rounded >
                {user.displayName[0]}
            </Avatar>
            }
            <h5 className="header-opt-title">{title}</h5> 
            
        </div>
    )
}

export default HeaderOptions
 