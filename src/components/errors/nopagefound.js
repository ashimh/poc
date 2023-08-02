import React, { useEffect } from 'react';
import { Box, Modal } from './style';
import { useNavigate } from 'react-router-dom';

function NoPageFound({msg}) {
    const navigate = useNavigate();
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => {
            clearTimeout(redirectTimer);
        }
    }, []);
    return (
        <Box>
            <Modal>
                <p>{msg}</p>
            </Modal>
        </Box>

    )
}

export default NoPageFound