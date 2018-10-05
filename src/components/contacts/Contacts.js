import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value; // Destructuring
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
              {/* On passe l'objet contact directement au lieu de passer chaque propriété séparément */}
              {/* <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} /> */}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
