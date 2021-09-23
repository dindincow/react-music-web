import * as actionType from "../actionType";

const defaultState = {
    topBanner:[]
}


const recommendReducer = (state=defaultState,action)=>{
  
    switch(action.type){
        case actionType.CHANGE_TOP_BANNER:  
            return {...state,topBanner:action.topBanner};
        default:
            return state;
    }

}
export default recommendReducer;
