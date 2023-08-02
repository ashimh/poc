import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 800;
    margin: 5px
`;

export const Box = styled.div`
    display: flex;
    height: 50px;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin-left: 20px;
`;

export const CustomNav = styled.nav`
    width: 100%;
    height: 50px;
    padding: 8px;
    background: #7755b5;
`;