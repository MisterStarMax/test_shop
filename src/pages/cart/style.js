import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    min-width: 320px;
    max-width: 1140px;
    margin: auto;
`;

export const CartList = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    min-width: 300px;
    width: 50%;
    margin: auto;
    @media (max-width: 680px){
        width: 90%;
    }
`;

export const Item = styled.div`
    position: relative;
    display: flex;
    flex-flow: row no-wrap;
    margin: 10px 0px;
    border: 1px solid;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Content = styled.div`
    flex: 100px;
    flex-flow: column;
    padding-left: 10px;
`;

export const Control = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
    height: 25px
    width: 90px;
    margin: auto;  
`;

export const Input = styled.input`
    text-align: center;
    width: 25px;  
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }   
`;

export const ErrorBlock = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    color: red;
    font-weight: 600;
`;

export const TotalPrice = styled.span`
    font-weight: 700;
    font-size: 18px;
    margin: 10px 0;
`;

export const Title = styled.h1`
    text-align: center
`
