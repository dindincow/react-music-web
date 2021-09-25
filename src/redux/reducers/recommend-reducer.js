
import {Map} from 'immutable';
import * as actionType from "../actionType";

const defaultState = Map({
    topBanner:[]
})


function reducer(state=defaultState,action){
  
    switch(action.type){
        case actionType.CHANGE_TOP_BANNER:  
            return state.set('topBanner',action.topBanner)
        default:
            return state;
    }

}
export default reducer;
