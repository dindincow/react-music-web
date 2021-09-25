import request from '@/api/request';

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

