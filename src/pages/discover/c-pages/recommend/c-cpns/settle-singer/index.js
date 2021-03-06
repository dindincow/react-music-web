import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {getSettleSingersActions} from "@/redux/actions/discover_actions";
import {getSizeImage} from "@/utils/data-format";

import ThemeHeaderSmall from '@/components/theme-header-small';

import {SetterSongerWrapper} from "./style";


export default memo(function SettleSinger() {
    // redux
    const dispatch = useDispatch();
    const state = useSelector((state) => ({
        settleSings: state.getIn(["recommend", "settleSings"])
    }), shallowEqual);

    // hooks
    useEffect(() => {
        dispatch(getSettleSingersActions());
    }, [dispatch])

    return (
        <SetterSongerWrapper>
             <ThemeHeaderSmall title="入驻歌手" more="查看全部 >" />
            <div className="singer-list">
                {
                    state.settleSings.map((item, index) => {
                        return (
                            <a href="/singer" key={item.id} className="item">
                                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                                <div className="info">
                                    <div className="title">{item.alias.join("") || item.name}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="apply-for">
                <a href="/abc">申请成为网易音乐人</a>
            </div>
        </SetterSongerWrapper>
    )
})
