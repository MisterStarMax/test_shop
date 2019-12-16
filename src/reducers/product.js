const init = {
    list: [],
    loading: false,
    error: null,
}

const Product = (state = init, action) => {
    switch (action.type) {
        case 'LIST_PRODUCTS_REQUESTED':
            return {
                ...state,
                list: [],
                loading: true,
                error: null
            };
        case 'LIST_PRODUCTS_LOADED':
            return {
                ...state,
                list: action.payload,
                loading: false,
                error: null
            };
        case 'LIST_PRODUCTS_ERROR':
            return {
                ...state,
                list: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default Product;