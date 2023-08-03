import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CustomLink, CustomNav } from './style';

function Navbar() {
    return (
        <>
            <CustomNav>
                <Box>
                    <CustomLink to={"/"}>Home</CustomLink>
                    <CustomLink to={"/add"}>Add User</CustomLink>
                </Box>
            </CustomNav>
        </>
    )
}

export default Navbar