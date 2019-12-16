import styled from 'styled-components';

export const ProductList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;    
    max-width: 960px;
    margin: 20px auto;
`;

export const ItemList = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center; 
    margin: 10px 9px;
    height: 350px;
    width: 300px;
    border: 1px solid;
`;

export const ItemTitle = styled.h4`
    position: absolute;
    width: inherit;
    display: flex;
    justify-content: center;
    height: 30px;
    margin: 0;
    color: white;
    background-color: #000000c7;
`;

export const ItemImg = styled.img`
    width: 100%;
    height: auto;
    max-height: 290px;
    object-fit: fill;
    object-position: 50% 50%;
    margin: auto;
    background-color: black;
`;

export const ItemPrice = styled.span`
    display: flex;
    justify-content: center;
    height: 30px;
    width: 100%;
    margin: 0;
    color: white;
    background-color: #9b9797;
`;

export const BuyButton = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    font-family: sans-serif;
    font-style: oblique;
    color: white;
    background-color: #2196F3;
    border: none;
`;