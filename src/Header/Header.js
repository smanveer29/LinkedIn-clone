import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from '../HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../Firebase/firebase'
// import {useSelector} from 'react-redux'
// import {selectUser} from '../features/userSlice'

function Header() {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch()

    const logoutApp = () => {
        auth.signOut();
        dispatch(logout());

    };
    
    return (
        <div className="header">

            <div className="header-left">
                <img src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>
            <div className="header-right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={PeopleIcon} title="My-Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notification" />
                <HeaderOptions avatar="../img/photo.jpg" title="Me" 
                onClick={logoutApp} />
            </div>
        </div>
    )
}

export default Header
