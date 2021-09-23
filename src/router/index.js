import React from "react"
import { Redirect } from "react-router-dom";
import Discover from "@/pages/discover";
import Firend from "@/pages/firend";
import Mine from "@/pages/mine";
import Album from "@/pages/discover/c-pages/album";
import Artist from "@/pages/discover/c-pages/artist";
import Djradio from "@/pages/discover/c-pages/djradio";
import Ranking from "@/pages/discover/c-pages/ranking";
import Recommend from "@/pages/discover/c-pages/recommend";
const routes = [
    {
        path:"/",
        exact:true,
        render:()=> (
            <Redirect to="/discover"></Redirect>
        ),
      
    },
    {
        path:"/discover",
        component:Discover,
        routes:[
            {
                path:"/discover",
                exact:true,
                render: ()=>(
                    <Redirect to="/discover/album"></Redirect>
                )
                
            },
            {
                path:"/discover/album",
                component:Album,
                
            },
            {
                path:"/discover/artist",
                component:Artist,
                
            },
            {
                path:"/discover/djradio",
                component:Djradio,
                
            },
            {
                path:"/discover/ranking",
                component:Ranking,  
            },
            {
                path:"/discover/recommend",
                component:Recommend,  
            },

        ]
    },
    {
        path:"/mine",
        component:Mine
    },
    {
        path:"/firend",
        component:Firend
    }
  

]
export default routes;