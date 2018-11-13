import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseBurger = (orderData, token) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then((res) => {
                // console.log("[Actions/order] Response: ", res.data);
                dispatch(purchaseBurgerSuccess(res.data.id, orderData))
            })
            .catch((err) => {
                dispatch(purchaseBurgerFail(err))
            });
    }
};



export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
};

export const fetchOrders = (token, userId) => {
    return (dispatch) => {
        dispatch(fetchOrderStart());
        const queryParams = token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json?auth=' + queryParams)
            .then((res) => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }

                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch((error) => {
                dispatch(fetchOrdersFail(error))
            })
    }
};

/** Pure function before all changes */
// export const fetchOrders = () => {
//     return (dispatch) => {
//         dispatch(fetchOrderStart());
//         axios.get('/orders.json')
//             .then((res) => {
//                 const fetchedOrders = [];
//
//                 for (let key in res.data) {
//                     fetchedOrders.push({
//                         ...res.data[key],
//                         id: key
//                     });
//                 }
//
//                 dispatch(fetchOrdersSuccess(fetchedOrders));
//             })
//             .catch((error) => {
//                 dispatch(fetchOrdersFail(error))
//             })
//     }
// };

