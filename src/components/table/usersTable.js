import React, { useState, useEffect } from "react";
import axios from "axios";
import { CustomButton, CustomLink, TRHead, TREven, TROdd, Table, TH, TD, Box } from "./style";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUpdateUser = (userId) => {
    console.log("Update user with ID:", userId);
  };



  return (
    <Box> 
      <Table>
        <thead>
          <TRHead>
            <TH>Id</TH>
            <TH>Name</TH>
            <TH>Username</TH>
            <TH>Email</TH>
            <TH>Address</TH>
            <TH>Phone</TH>
            <TH>Website</TH>
            <TH>Company</TH>
            <TH>Action</TH>
          </TRHead>
        </thead>
        <tbody>{users.map((user, i) => (
          (i % 2) !== 0 ?
          <TROdd key={user.id}>
            <TD>{user.id}</TD>
            <TD>{user.name}</TD>
            <TD>{user.username}</TD>
            <TD>{user.email}</TD>
            <TD>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</TD>
            <TD>{user.phone}</TD>
            <TD>{user.website}</TD>
            <TD>{user.company.name}</TD>
            <TD>
              <CustomButton>
              <CustomLink to="/update" onClick={() => handleUpdateUser(user.id)} state={user}>Edit</CustomLink>
              </CustomButton>
              
            </TD>
          </TROdd> : <TREven key={user.id}>
            <TD>{user.id}</TD>
            <TD>{user.name}</TD>
            <TD>{user.username}</TD>
            <TD>{user.email}</TD>
            <TD>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</TD>
            <TD>{user.phone}</TD>
            <TD>{user.website}</TD>
            <TD>{user.company.name}</TD>
            <TD>
              <CustomButton>
              <CustomLink to="/update" onClick={() => handleUpdateUser(user.id)} state={user}>Edit</CustomLink>
              </CustomButton>
              
            </TD>
          </TREven>
        ))}</tbody>
      </Table>
    </Box>
  );
};

export default UserTable;
