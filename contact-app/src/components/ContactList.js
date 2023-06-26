import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const RenderContactList=props.contacts.map((contacts)=> {
        return (
            <ContactCard contacts={contacts} />
        );
    });
    return <div className="ui called list">{RenderContactList}</div>;
}
export default ContactList;