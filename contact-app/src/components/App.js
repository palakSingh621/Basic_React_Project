import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id: "1", 
      name: "Palak",
      email: "kushwaha621@gmail.com"
    },
    {
      id: "2",
      name: "Anshika",
      email: "anshikaJaiswal91@gmail.com"
    }
  ];
  return (
    <div>
      <Header/>
       <AddContact /> 
       <ContactList  contacts={contacts}/> 
    </div>
  );
}

export default App;
