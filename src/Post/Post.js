import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Post.css"
import FeedInputOpt from '../Feed/FeedInputOpt'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice' 
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({ name, description, message, photoUrl }) {
    const user=useSelector(selectUser);
    return (
        <div className="post">
            <div className="post-header">
                <Avatar src={user.photoUrl}/>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post-body">
                <h2>{message}</h2>
            </div>
            <div className="post-buttons">
                <FeedInputOpt title="Like" Icon={ThumbUpOutlinedIcon} color="grey"/>
                <FeedInputOpt title="Comment" Icon={MessageIcon} color="grey"/>
                <FeedInputOpt title="Share" Icon={ShareIcon} color="grey"/>
                <FeedInputOpt title="Send" Icon={SendIcon} color="grey"/>
            </div>
        </div>
    )
}

export default Post
