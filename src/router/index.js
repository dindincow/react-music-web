import React from "react"
import { Redirect } from "react-router-dom";
import Discover from "@/pages/discover";
import Firend from "@/pages/firend";
import Mine from "@/pages/mine";
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
        component:Discover
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