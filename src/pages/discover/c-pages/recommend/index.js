import React, { memo,useEffect } from 'react';
import {connect} from "react-redux";
import { getTopBannerAction } from "@/redux/actions/discover_actions";

function Recommend(props) {
    const { getTopBanner,topBanner } = props;
    useEffect(() => {  
        getTopBanner()
    }, [getTopBanner])
    
    return (
        <div>
            Recommend==..{topBanner.length}
        </div>
    )
}

const mapStateToProps = (state)=>({
    topBanner: state.recommend.topBanner
   
})

const mapDispatchToProps = (dispatch)=>({
    getTopBanner(){
        dispatch(getTopBannerAction())
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
