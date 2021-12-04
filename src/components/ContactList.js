import React, { useState } from "react";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: "Mo",
      email: "mo@test.com",
    },
    {
      id: 2,
      name: "Farheen",
      email: "farheen@test.com",
    },
  ]);
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
        {contacts.map((contact) => {
          return (
            <ContactCard
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
