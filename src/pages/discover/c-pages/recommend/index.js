import React, { memo,useEffect } from 'react';
import { RecommendWrapper,Content,RecommendLeft,RecommendRight} from "./style";
import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
function Recommend(props) {
      
    return (
        <RecommendWrapper>
            <TopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <HotRecommend></HotRecommend>
                    <NewAlbum/>
                    <RecommendRanking/>
                </RecommendLeft>
                <RecommendRight>
                    RecommendRight
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}



export default memo(Recommend)
