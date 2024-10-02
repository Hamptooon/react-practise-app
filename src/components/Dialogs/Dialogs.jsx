import React from 'react';
import DialogsStyle from './Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {

    let messageInput = React.createRef();
    let addMessage = () => {
        let text = messageInput.current.value;
        props.addMessage(text);
        messageInput.current.value = '';
    }
    let dialogsElements = props.dialogsData.map(d => <DialogsItem name={d.name} />)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} />)
    console.log(props)
    return (
        <div className={DialogsStyle.dialogsContainer}>
            
            <div className={DialogsStyle.dialogs}>
               
                <div className={DialogsStyle.dialogsItems}>
                    <h3>Dialogs</h3>
                   {dialogsElements}
                </div>
                <div className={DialogsStyle.messages}>
                    {messagesElements}
                    <div className={DialogsStyle.messageInput}>
                        <textarea ref = {messageInput} ></textarea> 
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;