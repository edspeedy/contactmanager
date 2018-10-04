import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo }); // Permet un effet 'toggle' au click
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    // const {name, email, phone} = this.props;  version1
    // const {contact} = this.props;  version2
    const { id, name, email, phone } = this.props.contact; /* version3 */
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              {/*  version2
        <h4>{contact.name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.phone}</li>
        </ul> */}

              {/* version1 et 3 ci-dessous */}
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  // Du au chgt de props : l'objet contact au lieu des chaines name, email et phone
  // name: PropTypes.string.isRequired
  // email: PropTypes.string.isRequired
  // phone: PropTypes.string.isRequired
  contact: PropTypes.object.isRequired
};

export default Contact;
