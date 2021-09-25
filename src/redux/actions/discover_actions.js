import * as actionType from "../actionType";
import { getBanner,getHotRecommends } from "@/api";

const changeTopBannerAction = (data)=>({
    type:actionType.CHANGE_TOP_BANNER,
    topBanner:data
})

const changeHotRecommendsAction = (data)=>({
    type:actionType.CHANGE_TOP_BANNER,
    topBanner:data
})

export const getTopBannerAction = ()=>{
    return async(dispatch) => {
        const result = await getBanner();
        dispatch(changeTopBannerAction(result.banners))
    }
}

export const getHotRecommendsAction = ()=>{
    return async(dispatch) => {
        const result = await getHotRecommends(8);
        console.log('result',result)
        //dispatch(changeTopBannerAction(result.banners))
    }
}