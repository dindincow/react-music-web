import * as actionType from "../actionType";
import { getBanner,getHotRecommends,getNewAlbum, getTopList,getArtistList} from "@/api";

const changeTopBannerAction = (data)=>({
    type:actionType.CHANGE_TOP_BANNER,
    topBanner:data
})

const changeHotRecommendsAction = (data)=>({
    type:actionType.CHANGE_HOT_RECOMMENDS,
    hotRecommends:data
})

const changeNewAlbumsAction = (data) =>({
    type:actionType.CHANGE_NEW_ALBUMS,
    newAlbums:data
})

const changeUprankingAction = (data)=>({
    type:actionType.CHANGE_UP_RANKING,
    upRanking:data.playlist
})

const changeNewrankingAction = (data)=>({
    type:actionType.CHANGE_NEW_RANKING,
    newRanking:data.playlist    
})

const changeOriginRankingAction = (data)=>({
    type:actionType.CHANGE_ORIGIN_RANKING,
    originRanking:data.playlist  
})

const changeSettleSingsAction = (res) => ({
    type: actionType.CHANGE_SETTLE_SONGER,
    settleSings: res.artists
})

export const getTopBannerAction = ()=>{
    return async(dispatch) => {
        const result = await getBanner();
        dispatch(changeTopBannerAction(result.banners))
    }
}

export const getHotRecommendsAction = ()=>{
    return async(dispatch) => {
        const res = await getHotRecommends(8);
        dispatch(changeHotRecommendsAction(res.result))
    }
}

export const getNewAlbumsAction = (limit)=>{
    return async(dispatch) => {
        const res = await getNewAlbum(limit);
        dispatch(changeNewAlbumsAction(res.albums))
    }
}

export const getTopListAction = (idx)=>{

    return async(dispatch) => {
        const res = await getTopList(idx);
        switch(idx){
            case 0:
                dispatch(changeUprankingAction(res))
                break;
            case 2:
                
                dispatch(changeNewrankingAction(res))
                break;
            case 3:
                dispatch(changeOriginRankingAction(res))
                break;
            default:
        }    
    }
}

// 入住歌手
export const getSettleSingersActions = () => {
    return dispath => {
      getArtistList(5, 5001).then(res => {
        dispath(changeSettleSingsAction(res))
      })
    }
  }