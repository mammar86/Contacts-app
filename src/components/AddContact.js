import React, { useState } from "react";

const AddContact = (props) => {
  const [newContact, setNewContact] = useState({
    id: "",
    name: "",
    email: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (newContact.name.length === 0 || newContact.email.length === 0) {
      alert("field can't be empty");
    } else {
      props.addToContacts(newContact);
    }
    setNewContact({
      id: "",
      name: "",
      email: "",
    });
  };

  return (
    <div className="m-3">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ name: e.target.value, email: newContact.email })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={newContact.email}
            placeholder="Email"
            onChange={(e) =>
              setNewContact({ name: newContact.name, email: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddContact;
