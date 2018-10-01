import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
  /* constructor() {
    super();
    this.state = {...} */
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "hdoe@gmail.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "222-222-2222",
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "111-111-1111",
      },
    ],
  };

  render() {
    const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
        {/* On passe l'objet contact directement au lieu de passer chaque propriété séparément */ } 
        {/* <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} /> */}
      </React.Fragment>
    );
  }
}

export default Contacts;



