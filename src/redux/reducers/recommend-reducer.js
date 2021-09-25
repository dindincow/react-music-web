
import {Map} from 'immutable';
import * as actionType from "../actionType";

const defaultState = Map({
    topBanner:[],
    hotRecommends:[]
})


function reducer(state=defaultState,action){
  
    switch(action.type){
        case actionType.CHANGE_TOP_BANNER:  
            return state.set('topBanner',action.topBanner);
        case actionType.CHANGE_HOT_RECOMMENDS:  
            return state.set('hotRecommends',action.hotRecommends);
        default:
            return state;
    }

}
export default reducer;
