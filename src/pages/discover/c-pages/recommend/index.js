import React, { memo,useEffect } from 'react';
import { RecommendWrapper,Content,RecommendLeft,RecommendRight} from "./style";
import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotRadio from "./c-cpns/hot-radio";

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
                    <UserLogin/>  
                    <SettleSinger/>
                    <HotRadio/>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}



export default memo(Recommend)
