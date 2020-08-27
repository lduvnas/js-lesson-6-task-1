import React from "react";
import { useRef, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function NameForm() {
  const firstNameInputField = useRef();
  const lastNameInputField = useRef();
  const { setUser } = useContext(UserContext);

  function handleOnClick() {
    const firstName = firstNameInputField.current.value;
    const lastName = lastNameInputField.current.value;

    setUser({
      firstName,
      lastName
    });

    firstNameInputField.current.value = "";
    lastNameInputField.current.value = "";
  }

  return (
    <div className="container">
      <p>Name Form</p>
      <input
        /*  onChange={event => setUser(event.target.value)} */
        ref={firstNameInputField}
        className="form-control w-25"
        placeholder="First name"
      />
      <input
        ref={lastNameInputField}
        className="form-control w-25"
        placeholder="Last name"
      />
      <button onClick={handleOnClick} className="btn btn-primary mb-2">
        Save
      </button>
    </div>
  );
}
