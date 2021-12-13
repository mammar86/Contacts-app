import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ContactCard = (props) => {
  const { id, number, name, email } = props;
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => props.clickHandler(id)}
        />
      </td>
    </tr>
  );
};
export default ContactCard;
