import React,{useState} from 'react'
import { TextField } from '@material-ui/core';
import "./Login.css"
import {useDispatch} from 'react-redux';
import { Button } from '@material-ui/core';
import {auth} from "../Firebase/firebase.js"
import {login} from '../features/userSlice'
function Login() {
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');

    const [profilePic,setProfilePic]=useState('');

    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert('Please Enter your Full name');
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoUrl:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic
                }))
            })
        }).catch(error=>alert(error));
    }
    const loginApp=()=>{
        // e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profilePic:userAuth.user.photoUrl,
            }))
            console.log(userAuth);
        }).catch((e)=>alert(e))

        
    };
    return (
        <div className="login">
            {/* <p>Login page</p> */}
            <img src=" https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png " alt="Linked In" />

            <form  noValidate autoComplete="off">
                <TextField  className="login-input" label='First Name' variant="outlined" autoFocus type="text" value={name} onChange={e=>setName(e.target.value)} />
                <TextField  className="login-input" label='Profile URL' variant="outlined" type="text" value={profilePic} onChange={e=>setProfilePic(e.target.value)}/>
                <TextField  className="login-input" label='Email' variant="outlined" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                <TextField  className="login-input" label='Password' variant="outlined" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <Button id ="login-button" variant="contained" color="primary" onCLick={()=>loginApp} >
                    Sign In
                </Button>
            </form>

            <p>Not a Member ? <span className="login-register" onClick={register}> Register Now </span></p>
        </div>
    )
}

export default Login
