import * as actionType from "../actionType";
import { getBanner } from "@/api";

const changeTopBannerAction = (data)=>({
    type:actionType.CHANGE_TOP_BANNER,
    topBanner:data
})

export const getTopBannerAction = ()=>{
    return async(dispatch) => {
        const result = await getBanner();
        dispatch(changeTopBannerAction(result.banners))
    }
}