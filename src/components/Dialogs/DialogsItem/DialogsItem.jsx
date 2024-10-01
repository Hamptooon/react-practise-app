import React from 'react';
import DialogsItemStyle from './DialogsItem.module.scss';
const DialogsItem = (props) => {
    return (
      <div className={DialogsItemStyle.dialogsItem}>
        {props.name}
      </div>
    );
}

export default DialogsItem;