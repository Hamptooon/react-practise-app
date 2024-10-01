import React from 'react';
import DialogsStyle from './Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
const Dialogs = (props) => {

    let dialogsData =[
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Radmil'},
        {id: 3, name: 'Egor'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi dude!'},
        {id: 2, message: 'How are You?)'},
        {id: 3, message: 'I\'m fine thnks'},
        {id: 4, message: 'It\'s good, will be able to meet tommorow?'},
    ]
    let dialogsElements = dialogsData.map(d => <DialogsItem name={d.name} />)
    let messagesElements = messagesData.map(m => <Message message={m.message} />)
    
    return (
        <div className={DialogsStyle.dialogsContainer}>
            
            <div className={DialogsStyle.dialogs}>
               
                <div className={DialogsStyle.dialogsItems}>
                    <h3>Dialogs</h3>
                   {dialogsElements}
                </div>
                <div className={DialogsStyle.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;