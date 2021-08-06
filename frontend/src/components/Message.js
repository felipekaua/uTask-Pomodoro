import React from 'react';
import '../css/Message.css';

const Message = ({status, title, msg}) => {  
  return (
    <span className={`message ${status || ''}`}>
      <h4>{title}</h4>
      {msg}
    </span>
  );
};

export default Message;