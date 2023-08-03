import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const CustomButton = styled.button`
    width: 90px;
    height: 35px;
    background: #7755b5;
    border-radius: 4px;
`;

export const CustomLink = styled(Link)`
    display: block;
    width: 100%;
    height: inherit;
    text-decoration: none;
    color: white;
    font-weight: 500;
    margin-top: 5px;
`;
export const Box = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
`;
export const Table = styled.table`
    display: block;
    overflow-x: scroll;
    overflow-y: scroll;
    border-spacing: 1px;
    overflow-x: scroll;
    width: 100%;
    height: 600px;
    padding: 5px;
`;

export const TRHead = styled.tr`
    background: whitesmoke;
    height: 60px;
`;

export const TH = styled.th`
    color: black;
    font-weight: bold;
    
`;

export const TREven = styled.tr`
    background: white;
    height: 60px;
`;

export const TROdd = styled.tr`
    background: whitesmoke;
    height: 60px;
`;

export const TD = styled.td`
    white-space: nowrap;
    text-overflow: ellipsis;
`;