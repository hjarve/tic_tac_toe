import React from "react";

const Notification = ({message}) => {

  if (!message) return null;
  
  return(
    <div className="notificationContainer">
      <p className="notificationText">{message}</p>
    </div>
  );
};

export default Notification;