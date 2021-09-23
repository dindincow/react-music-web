import request from '@/api/request';

// 獲取 banner
export const getBanner = () => {
    return request({
        url: '/banner',
    })
}
