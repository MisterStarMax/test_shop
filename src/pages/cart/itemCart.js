import React, { useState } from 'react';
import { useDataUpdateStore } from '../../components/customHooks';
import { Item, Image, Content, Control, Input, ErrorBlock } from './style';

const ItemCart = ({ name, count, price, img, del, add, setCount }) => {
    const [newCount, setNewCount] = useState(count);
    const { error, check } = useDataUpdateStore(count, newCount, setCount);

    return (
        <Item>
            <ErrorBlock>{error}</ErrorBlock>
            <Image src={img} />
            <Content>
                <h4>{name}</h4>
                <span>price: {price}$</span>
            </Content>
            <Control>
                <button onClick={del}>-</button>
                <Input type="number" value={newCount} onChange={e => setNewCount(e.target.value)} onBlur={check} />
                <button onClick={add}>+</button>
            </Control>
        </Item>
    )
}

export default ItemCart;