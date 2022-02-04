import { createStore, combineReducers, applyMiddleware } from "redux";
import pokemonsReducer from "./pokemons/pokemonsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ pokemonsReducer });
let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;