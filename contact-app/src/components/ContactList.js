import React from "react";

const ContactList = (props) => {
    console.log(props);
    const RenderContactList=props.contacts.map((contacts)=> {
        return (
            <div className="item">
                <div className="content">
                    <div className="Header">{contacts.name}</div>
                    <div>{contacts.email}</div>
                    </div>
                    <i className="trash alternate outline icon"></i>
            </div>
        );
    });
    return <div className="ui called list">{RenderContactList}</div>;
}
export default ContactList;