import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-flow: column;
    min-width: 300px;
    max-width: 600px;
    margin: 10px;
    border: 1px solid;
    padding: 10px 0;
    height: fit-content;
`;


export const Input = styled.input`
    height: 35px
    padding-left: 10px;
    font-size: 16px;
    margin: 10px 20px;
`;

export const Button = styled.button`
    height: 35px;
    font-size: 16px;
    font-weight: 600;
    font-family: sans-serif;
    font-style: oblique;
    border: none;
    color: white;
    background-color: #318707;
    margin: 10px 20px;
`;

export const ErrorEnter = styled.div`
    text-align: center;
    color: red;
`;