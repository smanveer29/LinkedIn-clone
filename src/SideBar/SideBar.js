import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBar.css"
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'

function SideBar() {
    const user=useSelector(selectUser);

    const recentItem=(topic)=> (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">

            <div className="sidebar-top">
                <img src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />

                <Avatar className="sidebar-avatar" src={user.photoUrl}   >
                    {user.displayName[0]}
                </Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            {/* Stats */}
            <div className="sidebar-stats ">
                <div className="sidebar-stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar-statNumber">232</p>

                </div>
                <div className="sidebar-stat">
                    <p>View On The Post</p>
                    <p className="sidebar-statNumber">213</p>
                </div>


            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem ("React JS")}
                {recentItem ("Coding")}
                {recentItem ("Programmer")}
                {recentItem ("Developer")}
                
            </div>
        </div>
    )
}

export default SideBar
