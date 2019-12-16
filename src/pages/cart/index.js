import React from 'react';
import { connect } from 'react-redux'
import { addToCart, delFromCart, setCountToCart } from '../../actions';
import FormContact from './formContact'
import ItemCart from './itemCart';
import {useTotalCountAndPrice} from '../../components/customHooks'
import { Container, CartList, TotalPrice } from './style'

const CartPage = ({ cart, delFromCart, addToCart, setCountToCart}) => {
    const { price } = useTotalCountAndPrice(cart)
    return (
        <Container>
            <CartList>
                {
                    cart.map((el) => (
                        <ItemCart key={el.id} {...el}
                            del={() => delFromCart(el)}
                            add={() => addToCart(el)}
                            setCount={(count) => setCountToCart(el, count)} />
                    ))
                }
                <TotalPrice>Total price: {price}</TotalPrice>
            </CartList>
            <FormContact />
        </Container>
    )
}

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = (dispatch, {service}) => {
    return {
        addToCart: obj => dispatch(addToCart(obj)),
        delFromCart: obj => dispatch(delFromCart(obj)),
        setCountToCart: (obj, count) => dispatch(setCountToCart(obj, count)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);