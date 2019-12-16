import React from 'react';
import styled from 'styled-components';
import nechto from './Nechto.jpg'

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    text-align: center;
    color: red;
    font-weight: 700;
    background-color: black;
    margin: auto;
    padding-bottom: 15px;
    border-radius: 10px;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 30%;
    max-height: 80vh;
    height: -webkit-fill-available;
`;

const Text = styled.div`
    width: 100%;
    text-align: center;
`

const ErrorIndicator = () => {
    return (
        <Container img={nechto}>
            <Text>
                Нечто плднялось со дна и что то поламало!
                Наши специаисты уже все исправляют!
            </Text>
        </Container>
    )
}

export default ErrorIndicator;