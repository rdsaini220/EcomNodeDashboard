import { put, call, fork, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { CallAPIService } from "../../services";
import { requestLogin, successLogin, failedLogin, requestLogout, successLogout, failedLogout } from "../slice/auth";

// login api call ==============================================
function loginRequestAPICall(body) {
    if (body){
        return CallAPIService(`/login`, 'POST', JSON.stringify(body));
    }else{
        return CallAPIService(`/refresh-token`);
    }
}

function* loginRequest(action) {
    try {
        const data = yield call(loginRequestAPICall, action.payload);
        if (data.success) {
            Cookies.set('authToken', data.token, { expires: 7 });
            yield put(successLogin(data));
        } else {
            yield put(failedLogin(data));
        }
    } catch (error) {
        yield put(failedLogin(data));
    }
}

function* loginRequestListener() {
    yield takeLatest(requestLogin.type, loginRequest);
}

// logout api call ==============================================
function logoutRequestAPICall() {
    return CallAPIService(`/logout`);
}

function* logoutRequest(action) {
    try {
        const data = yield call(logoutRequestAPICall, action.payload);
        console.log(data)
        if (data.success) {
            Cookies.remove('authToken');
            yield put(successLogout(data));
        } else {
            yield put(failedLogout(data));
        }
    } catch (error) {
        yield put(failedLogout(data));
    }
}


function* logoutRequestListener() {
    yield takeLatest(requestLogout.type, logoutRequest);
}


export default function* authSaga() {
    yield fork(loginRequestListener);
    yield fork(logoutRequestListener);
}