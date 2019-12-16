export const addToCart = (obj) => {
    return {
        type: 'ADD_TO_CART', 
        payload: obj
    }
}

export const delFromCart = (obj) => {
    return {
        type: 'DEL_TO_CART',
        payload: obj
    }
}

export const setCountToCart = (obj, count) => {
    return {
        type: 'SET_COUNT_TO_CART',
        payload: { obj, count }
    }
}