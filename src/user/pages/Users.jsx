import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ansar Ibrahim",
      image:
        "https://images.unsplash.com/photo-1706155648345-08e7b64894ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
