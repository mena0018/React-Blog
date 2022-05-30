import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk"
import { articleReducer } from "./articles/articleReducer"


const rootReducer = combineReducers({
    articleReducer
})

// Thunk permet de pouvoir passer des fonctions (getArticles) à notre MiddleWare
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;
