import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getTopBannerAction } from "@/redux/actions/discover_actions";
import {BannerWrapper,BannerLeft,BannerRight,BannerControl} from "./style";

import { Carousel } from 'antd';

function Topbanner(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerRef = useRef();

    // 組件和 redux 關聯，獲取數據和進行操作, shallowEqual 用來做淺層比較
    const {topBanner} = useSelector((state)=>({
        //topBanner:state.get("recommend").get('topBanner')
        topBanner:state.getIn(["recommend","topBanner"])
    }),shallowEqual)

    const dispatch = useDispatch();

    // 發送網路請求
     useEffect(() => {  
        dispatch(getTopBannerAction())
    }, [dispatch])

    // 點擊左右按鈕，獲取當前
    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to);
       
    }, []);


    // 高思模糊背景圖
    let bgImage = topBanner[currentIndex] && (topBanner[currentIndex].imageUrl + "?imageView&blur=40x20");
    
    return (
        // <BannerWrapper bgImage={bgImage}>
            <BannerWrapper  bgImage={bgImage}>
            <div className="banner wrap-2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanner.map(item=>{
                                return(
                                    <div className="banner-item" key={item.encodeId}>
                                        <img src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight/>
                <BannerControl classNames="wrap-2">
                    <button className="btn left" onClick={e=> bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e=> bannerRef.current.next()}></button>
                </BannerControl>
            </div>

        </BannerWrapper>
    )
}



export default memo(Topbanner)
