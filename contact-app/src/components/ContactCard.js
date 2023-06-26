import React from "react";
import user from "../images/user.png";
const ContactCard= (props) => {
    const { id , name ,email } = props.contacts;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <div className="Header" >{name}</div>
                    <div>{email}</div>
                    </div>
                    <i className="trash alternate outline icon" style={{color:"Red", marginTop:"7px", float:"right" }}></i>
            </div>
    );
}
export default ContactCard;