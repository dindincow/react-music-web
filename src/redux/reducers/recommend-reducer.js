
import {Map} from 'immutable';
import * as actionType from "../actionType";

const defaultState = Map({
    topBanner:[],
    hotRecommends:[],
    newAlbums:[],
    upRanking:{},
    newRanking:{},
    originRanking:{},
    settleSings: [],

})


function reducer(state=defaultState,action){
  
    switch(action.type){
        case actionType.CHANGE_TOP_BANNER:  
            return state.set('topBanner',action.topBanner);

        case actionType.CHANGE_HOT_RECOMMENDS:  
            return state.set('hotRecommends',action.hotRecommends);

        case actionType.CHANGE_NEW_ALBUMS:  
            return state.set('newAlbums',action.newAlbums);

        case actionType.CHANGE_UP_RANKING:  
            return state.set('upRanking',action.upRanking);

        case actionType.CHANGE_NEW_RANKING:  
            return state.set('newRanking',action.newRanking);

        case actionType.CHANGE_ORIGIN_RANKING:  
            return state.set('originRanking',action.originRanking);
        case actionType.CHANGE_SETTLE_SONGER:
            return state.set("settleSings", action.settleSings)
        default:
            return state;
    }

}
export default reducer;
