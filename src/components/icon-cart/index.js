import React from 'react';
import { useSelector } from 'react-redux'
import { useTotalCountAndPrice } from '../customHooks';
import styled from 'styled-components';
import * as FontAwesome from 'react-icons/lib/fa'

const Icon = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    color: white;
    text-align: center;
`
const Count = styled.span`
    position: absolute;
    top: 5px;
    left: 6px;
    right: 0;
    color: red;
    font-size: 13px;
    font-weight: 800;
    text-align: center;
`

const IconCart = () => {
    //хук redux для получения данных стора
    let cart = useSelector(state => state.cart) || [];
    //хук что передает масив с обьектами а возвращает общее кол-во и цену
    const { count, price } = useTotalCountAndPrice(cart);

    return(
        <Icon>
            <Count>{count}</Count>
            <FontAwesome.FaShoppingCart color="white" size="34" />
            <span>{price}</span>
        </Icon>
    )
}

export default IconCart;