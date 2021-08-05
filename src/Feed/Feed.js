import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import FeedInputOpt from './FeedInputOpt';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NotesIcon from '@material-ui/icons/Notes';
import Post from "../Post/Post";
import {db} from '../Firebase/firebase';
import firebase from 'firebase';
import {useSelector} from 'react-redux'
import {selectUser} from "../features/userSlice"

function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input,setInput]=useState("");

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(setPosts(snapshot.docs.map(doc=>(
            {
                id:doc.id,
                data:doc.data(),
            }
        )))))
    }, [])

    const sendPost = (e) => {
        // e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description:'Details',
            message: input,
            photoUrl:'',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    return (
        <div className="feed">

            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form >
                        <input autofocus type="text" value={input} onChange={e=> setInput(e.target.value)} />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed-opt">
                    <FeedInputOpt Icon={PhotoLibraryIcon} title="Photos" color="#39A2DB" />
                    <FeedInputOpt Icon={PlayArrowIcon} title="Video" color="#7FC15E" />
                    <FeedInputOpt Icon={EventNoteIcon} title="Event" color="#ECB462" />
                    <FeedInputOpt Icon={NotesIcon} title="Write Article" color="#FC9295" />
                </div>
            </div>
            {/* {Posts} */}
            {posts.map(({id, data: {name,description,message,photoUrl} }) =>
                <Post 
                key={id} 
                name={name} 
                description={description}
                message={message}
                photoUrl={photoUrl} />
            )}
        </div>
    )
}

export default Feed
