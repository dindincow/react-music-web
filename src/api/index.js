import request from '@/api/request';


/* ---------------------推薦 -------------------*/

// 獲取 banner
export const getBanner = () => {
    return request({
        url: '/banner',
    })
}

// 熱門推薦
export const getHotRecommends = (limit) => {
    return request({
        url: '/personalized',
        params:{
            limit
        }
    })
}

// 新碟上架
export const getNewAlbum = (limit) => {
    return request({
        url: '/top/album',
        params:{
            limit
        }
    })
}

// 榜單
export const getTopList = (idx) => {
    return request({
        url: '/top/list',
        params:{
            idx
        }
    })
}

// 入駐歌手
export function getArtistList(limit, cat) {
    return request({
      url: "/artist/list",
      params: {
        cat,
        limit
      }
    })
}



