import React,{memo,useEffect} from 'react';
import { renderRoutes } from 'react-router-config';
import {TopNav,DiscoverWrapper} from "./style";
import {dicoverMenu} from "@/common/local-data"
import { NavLink } from 'react-router-dom';
import { getBanner } from '@/api'


export default memo(function Discover(props) {
    const { route } = props;
    useEffect(() => {
        async function getDisCoverBanner() {
            const response = await getBanner();
            console.log('response',response)
        }
        getDisCoverBanner();
     
    }, [])
    return (
        <DiscoverWrapper classNam="wrap-v2">
           <TopNav>
               <div className="top wrap-v1">
                    {
                        dicoverMenu.map((item)=>{
                            return <NavLink   key={item.title} className="item" to={item.link}>{item.title} </NavLink>
                        })
                    }
                </div>
            </TopNav>
            {renderRoutes(route.routes)}
          
        </DiscoverWrapper>
    )
})
