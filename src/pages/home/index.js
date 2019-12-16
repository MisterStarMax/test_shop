import React from 'react';
import {connect} from 'react-redux'
import { fetchListProduct, addToCart } from '../../actions';
import { withDataService, withLogicRender } from '../../components/hoc'
import { ProductList, ItemList, ItemTitle, ItemImg, ItemPrice, BuyButton} from './style'

const HomePage = ({ list, addToCart }) => {
    return(
        <ProductList>
            {
                list.map(el => (
                    <ItemList key={el.id} img={el.img}>
                        <ItemTitle>{el.name}</ItemTitle>
                        <ItemImg src={el.img} />
                        <ItemPrice>price: {el.price}$</ItemPrice>
                        <BuyButton onClick={() => addToCart(el, 1)}>Купить</BuyButton>
                    </ItemList>
                ))
            }
        </ProductList>
    )
}

const mapStateToProps = ({ product }) => product;

const mapDispatchToProps = (dispatch, {service}) => {
    return {
        fetchData: fetchListProduct(dispatch, service),
        addToCart: (obj, count) => dispatch(addToCart(obj, count))
    }
}

export default withDataService()(
    connect(mapStateToProps, mapDispatchToProps)(
        withLogicRender()(HomePage)
    )
);