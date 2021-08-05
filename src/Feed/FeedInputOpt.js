import React from 'react'
import "./FeedInputOpt.css"

function FeedInputOpt({title,Icon,color}) {
    return (
        <div className="feed-input-opt">
            
            {Icon &&
            <Icon  style={{color:color}}/>
            }

            <h4>{title}</h4>
            
        </div>
    )
}

export default FeedInputOpt
