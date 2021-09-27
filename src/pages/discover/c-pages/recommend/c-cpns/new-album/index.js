import React, { memo ,useEffect,useRef} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import { getNewAlbumsAction } from "@/redux/actions/discover_actions";
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover';
import {AlbumWrapper} from './style';

export default memo(function RecommendRanking() {
    const dispatch = useDispatch();
    const pageRef = useRef();

    const {newAlbums} = useSelector((state)=>({
        newAlbums:state.getIn(["recommend","newAlbums"])
    }),shallowEqual);

    useEffect(() => {
        dispatch(getNewAlbumsAction(10))
    }, [dispatch])

    return (
        <AlbumWrapper>
            <ThemeHeaderRCM title="新碟上架" />
           
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                <div key={item} className="page">
                                    {
                                        newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                            return <AlbumCover key={iten.id} info={iten} size={100} width={118} bgp={"-570px"}/>
                                        })
                                    } 
                                </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02"
                    onClick={e => pageRef.current.next()}>
                </button>
            </div>
        </AlbumWrapper>
    )
})
