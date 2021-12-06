import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
