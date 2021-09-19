import React,{memo} from 'react'
import {HeaderWrapper,HeaderLeft,HeaderRight} from './style'
export default memo(function HYAppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                </HeaderLeft>
                <HeaderRight>
                    {/* <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
                    <div className="center">创作者中心</div>
                    <div>登录</div> */}
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
