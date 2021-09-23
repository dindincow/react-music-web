import React,{memo} from 'react';
import {TopNav,DiscoverWrapper} from "./style";
import {dicoverMenu} from "@/common/local-data"
import { NavLink } from 'react-router-dom';


export default memo(function Discover() {
    return (
        <DiscoverWrapper classNam="wrap-v2">
            asdasd
           <TopNav>
               <div className="top wrap-v1">
              
                   {
                       dicoverMenu.map((item)=>{
                           return <NavLink  className="item" to="/">{item.title} </NavLink>
                       })
                   }
                </div>
              
            </TopNav>
          
        </DiscoverWrapper>
    )
})
