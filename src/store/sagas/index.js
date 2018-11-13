import { takeEvery } from "redux-saga/effects";

import * as actionTypes from '../actions/actionTypes'
import { logoutSaga } from "./auth";

// creating listener for AUTH_INITIATE_LOGOUT
export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
}