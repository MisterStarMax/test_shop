const listProductRequsted = () => {
    return {
        type: 'LIST_PRODUCTS_REQUESTED'
    }
}
const listProductLoaded = (data) => {
    return {
        type: 'LIST_PRODUCTS_LOADED',
        payload: data
    }
}
const listProductError = (error) => {
    return {
        type: 'LIST_PRODUCTS_ERROR',
        payload: error
    }
}

const fetchListProduct = (dispatch, server) => () => {
    dispatch(listProductRequsted());
    server.getListProduct()
        .then((data) => dispatch(listProductLoaded(data)))
        .catch((error) => dispatch(listProductError(error)));
}
export default fetchListProduct;