const updateList = (arr = [], obj, count) => {
    let key = arr.findIndex(e => e.id === obj.id);
    if (key === -1) return [...arr, { ...obj, count: 1 }]
    let balance = arr[key].count + count;
    if (balance <= 0) return [...arr.slice(0, key), ...arr.slice(key + 1)] || [];
    return [...arr.slice(0, key), { ...arr[key], count: balance }, ...arr.slice(key + 1)];
}

const init = JSON.parse(localStorage.getItem('cart')) || [];

const Cart = (state = init, action) => {
    let newListCart = [];
    switch (action.type) {
        case 'ADD_TO_CART':
            newListCart = updateList(state, action.payload, 1);
            localStorage.setItem('cart', JSON.stringify(newListCart));
            return newListCart
        case 'DEL_TO_CART':
            newListCart = updateList(state, action.payload, -1)
            localStorage.setItem('cart', JSON.stringify(newListCart));
            return newListCart;
        case 'SET_COUNT_TO_CART':
            newListCart = updateList(state, action.payload.obj, action.payload.count)
            localStorage.setItem('cart', JSON.stringify(newListCart));
            return newListCart;
        default:
            return state;
    }
}

export default Cart;