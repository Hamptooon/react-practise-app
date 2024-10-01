import React from 'react';
import MessageStyle from './Message.module.scss';
const Message = (props) => {
    return (
        <div className={MessageStyle.message}>
            {props.message}
        </div>
    )
}

export default Message;