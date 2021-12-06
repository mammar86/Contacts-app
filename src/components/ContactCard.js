import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ContactCard = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>
        <FontAwesomeIcon icon={faTrashAlt} />
      </td>
    </tr>
  );
};
export default ContactCard;
