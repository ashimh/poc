import {styled} from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const InnerBox = styled.div`
    display: block;
    flex-direction: column;
    align-items; center;
    width: 100%;
`;



export const Form = styled.form`
display: flex;
flex-direction: column;
width: 450px;
background-color: #f4f4f4;
padding: 20px;
border-radius: 5px;
justify-content: center;

`;

export const StyledLabel = styled.label`
display: block;
  margin: 10px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`