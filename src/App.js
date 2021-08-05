import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from "react-redux"
import { logout, login, selectUser } from './features/userSlice'
import Feed from './Feed/Feed';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import { auth } from './Firebase/firebase'
import Login from './Login/Login';
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    })
  })

  return (

    <div className="app">

      {!user ? <Login />
        :
        (<>
          <Header />
          <div className="app-body">
            <SideBar />
            <Feed />
          </div>
        </>

        )
      }

      {/* {Header} */}


      {/* {AppBody} */}
      {/* {Sidebar} */}
      {/* {Feed} */}
      {/* {Widgets} */}
    </div>
  );
}

export default App;
