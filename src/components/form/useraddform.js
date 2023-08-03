import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoPageFound from "../errors/nopagefound";
import { Box, Button, Form, InnerBox, InnerBox2, Input, StyledLabel } from "./style";

const UserAddForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: 0,
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
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
        const { name, value } = e.target
        if (name === "street" || name === "suite" || name === "city" || name === "zipcode") {
            setFormData((prevData) => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    [name]: value,
                },
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                company: {
                    ...prevData.company,
                    [name]: value,
                },
            }))
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ ...formData });

    };

    const addUser = async (data) => {
        try {
            // const response = await axios.put("https://jsonplaceholder.typicode.com/users/" + user.id, data);
            const response = await axios.post("http://localhost:8000/users/", data);
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

    };


    return (
        <div>
            {error.isError && <NoPageFound msg={error.msg} />}

            <Box>
                <h2>Add User</h2>
                <Form onSubmit={handleSubmit}>
                    <InnerBox>
                        <StyledLabel>Name:</StyledLabel>
                        <Input
                            required
                            type="text"
                            name="name"
                            onChange={handleChange}
                        />
                    </InnerBox>
                    <InnerBox>
                        <StyledLabel>Username:</StyledLabel>
                        <Input
                            required
                            type="text"
                            name="username"
                            onChange={handleChange}
                        />
                    </InnerBox>
                    <InnerBox>
                        <StyledLabel>Email:</StyledLabel>
                        <Input
                            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                            required
                            type="email"
                            name="email"
                            onChange={handleChange}
                        />
                    </InnerBox>

                    <InnerBox>
                        <StyledLabel>Phone:</StyledLabel>
                        <Input
                            pattern="[0-9]{10}"
                            required
                            type="tel"
                            name="phone"
                            placeholder="Enter 10-digit Phone number"
                            onChange={handleChange}
                        />
                    </InnerBox>

                    <InnerBox>
                        <StyledLabel>Address</StyledLabel>
                        <InnerBox2>
                            <Input
                                required
                                type="text"
                                name="street"
                                placeholder="Enter Street name"
                                onChange={handleCompanyChange}
                            />
                            <Input
                                required
                                type="text"
                                name="suite"
                                placeholder="Enter Suite"
                                onChange={handleCompanyChange}
                            />
                        </InnerBox2>
                        <InnerBox2>
                            <Input
                                required
                                type="text"
                                name="city"
                                placeholder="Enter your city"
                                onChange={handleCompanyChange}
                            />
                            <Input
                                pattern="[0-9]{6}"
                                required
                                type="number"
                                name="zipcode"
                                placeholder="Enter the Zipcode"
                                onChange={handleCompanyChange}
                            />
                        </InnerBox2>
                    </InnerBox>
                    <InnerBox>
                        <StyledLabel>Company</StyledLabel>
                        <InnerBox>
                            <Input
                                required
                                type="text"
                                name="name"
                                placeholder="Enter company name"
                                onChange={handleCompanyChange}
                            />
                            <Input
                                required
                                type="text"
                                name="catchPhrase"
                                placeholder="Enter Catch Phrase"
                                onChange={handleCompanyChange}
                            />
                            <Input
                                required
                                type="text"
                                name="bs"
                                placeholder="Enter BS"
                                onChange={handleCompanyChange}
                            />
                        </InnerBox>
                    </InnerBox>

                    <Button type="submit">Add user</Button>
                </Form>
            </Box>

        </div>
    );
};

export default UserAddForm;
