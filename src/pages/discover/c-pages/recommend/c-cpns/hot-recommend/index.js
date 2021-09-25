import React, { memo ,useEffect} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { getHotRecommendsAction } from "@/redux/actions/discover_actions";

export default memo(function HotRecommend() {
    const dispatch = useDispatch();

    // 獲取 redux 數據
    const {hotRecommends} = useSelector((state)=>({
        hotRecommends:state.getIn(["recommend","hotRecommends"])
    }),shallowEqual);

    // 發請求
    useEffect(() => {
        dispatch(getHotRecommendsAction())
    }, [dispatch])

    return (
        <div>
            <ThemeHeaderRCM title="热门推荐" keyWords={["华语","流行","摇滚","民谣","电子"]}/>
        </div>
    )
})
