import { createStore , combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { questionWatcher } from "../saga";
import { loadReducer } from "./loadReducer";
import { questionReducer } from "./questionReducer";
import { singleQuestReducer } from "./singleQuestReducer";
import { userReducer } from "./userReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    quest: questionReducer,
    loader: loadReducer,
    single: singleQuestReducer
})

export const store = createStore(rootReducer , applyMiddleware(sagaMiddleware))
sagaMiddleware.run(questionWatcher)