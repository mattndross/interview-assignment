import React, { useEffect, useState } from "react";

const Table = () => {
  const [musicians, setMusicians] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMusicians(data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        { musicians &&
            musicians.map(user => {
                return (
                    <tr>
                        <th>{user.firstName}</th>
                        <th>{user.lastName}</th>
                        <th>{user.email}</th>
                    </tr>
                )
            })}
      </tbody>
    </table>
  );
};

export default Table;
