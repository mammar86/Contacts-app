import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => props.getContactId(id);

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
        {props.contacts.map((contact, i) => {
          return (
            <ContactCard
              id={contact.id}
              number={i + 1}
              name={contact.name}
              email={contact.email}
              clickHandler={deleteContactHandler}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
