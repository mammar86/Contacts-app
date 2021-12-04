import React from "react";

const ContactCard = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.email}</td>
    </tr>
  );
};
export default ContactCard;
