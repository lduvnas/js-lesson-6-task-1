import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function AboutPage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>About Page</h1>

      <p>
        Welcome {user.firstName} {user.lastName}
      </p>
    </div>
  );
}
