import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NoPageFound from "../errors/nopagefound";
import { Box, Button, Form, InnerBox, Input, StyledLabel } from "./style";

const UserUpdateForm = () => {

  const location = useLocation();
  const user = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ...user,
    name: user.name,
    username: user.username,
    email: user.email,
    company: { ...user.company },
  });

  const [error, setError] = useState({
    isError: false,
    msg: "",
  });

  const handleChange = (e) => {

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCompanyChange = e => {
    setFormData((prevData) => ({
      ...prevData,
      company: { name: e.target.value },
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ ...formData });

  };

  const updateUser = async (data) => {
    try {
      const response = await axios.put("https://jsonplaceholder.typicode.com/users/" + user.id, data);
      console.log("Response:", response);
      navigate("/");
      setError({
        isError: false,
        msg: "",
      });
    } catch (error) {
      setError({
        isError: true,
        msg: error.message,
      });
      console.log(error);
    }

  }


  return (
    <div>
      {error.isError && <NoPageFound msg={error.msg} />}
      
      <Box>
      <h2>Update User Information</h2>
      <Form onSubmit={handleSubmit}>
        <InnerBox>
          <StyledLabel>Name:</StyledLabel>
          <Input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </InnerBox>
        <InnerBox>
          <StyledLabel>Username:</StyledLabel>
          <Input
            required
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </InnerBox>
        <InnerBox>
          <StyledLabel>Email:</StyledLabel>
          <Input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </InnerBox>
        <InnerBox>
          <StyledLabel>Company Name:</StyledLabel>
          <Input
            required
            type="text"
            name="company"
            value={formData.company.name}
            onChange={handleCompanyChange}
          />
        </InnerBox>
        <Button type="submit">Update</Button>
      </Form>
      </Box>
      
    </div>
  );
};

export default UserUpdateForm;
