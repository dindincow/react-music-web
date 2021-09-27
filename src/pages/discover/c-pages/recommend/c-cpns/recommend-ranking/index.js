import React, { memo,useEffect } from 'react';
import {useDispatch,useSelector,shallowEqual} from 'react-redux';
import {RankingWrapper} from './style';
import { getTopListAction } from '@/redux/actions/discover_actions';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';


export default memo(function RecommendRanking() {
    const dispatch = useDispatch();

    const {upRanking,newRanking,originRanking} = useSelector(state=>({
        upRanking:state.getIn(["recommend","upRanking"]),
        newRanking:state.getIn(["recommend","newRanking"]),
        originRanking:state.getIn(["recommend","originRanking"]),
    }),shallowEqual);

    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));  
    }, [dispatch])

    return (
        <RankingWrapper>
            <ThemeHeaderRCM title="榜单" />
            <div className="tops">
                <TopRanking info={upRanking}/>
                <TopRanking info={newRanking}/>
                <TopRanking info={originRanking}/>
            </div>
        </RankingWrapper>
    )
})
