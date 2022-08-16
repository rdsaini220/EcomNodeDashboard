import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

import rootReducer from "./slice";
import rootSaga from "./saga";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thank: false }), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store;