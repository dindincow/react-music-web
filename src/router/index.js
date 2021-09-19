import Discover from "@/pages/discover";
import Firend from "@/pages/firend";
import Mine from "@/pages/mine";

const routes = [
    {
        path:"/",
        exact:true,
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