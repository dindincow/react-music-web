import React, { memo } from 'react';
import ThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function HotRecommend() {
    return (
        <div>
            <ThemeHeaderRCM title="热门推荐" keyWords={["华语","流行","摇滚","民谣","电子"]}/>
        </div>
    )
})
