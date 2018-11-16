import { takeEvery, all, takeLatest} from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

// creating listener for AUTH_INITIATE_LOGOUT
export function* watchAuth() {
    /** We can execute set of tasks concurrently */
    yield all([
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ])
    // yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    // yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    // yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    // yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
};

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
};

export function* watchOrder() {
    /** Cancel all ongoing executions of actiions and take only the latest one */
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
};
