import { combineReducers } from "redux-immutable";
import recommendReducer from "./recommend-reducer"
const reducer = combineReducers({
     recommend:recommendReducer,
    // menu:menuReducer,
    // product:productReducer,
    // category:categoryReducer,
    // // login:loginReducer
    
})

export default reducer;