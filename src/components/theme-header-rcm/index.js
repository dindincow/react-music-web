import React, { memo,Fragment} from 'react';
import PropTypes from 'prop-types';
import {HeaderWrapper} from "./style"

const ThemeHeaderRCM = memo(function(props) {
    const {title,keyWords} = props;
    return (
        <HeaderWrapper className="sprite_02">
            <div className="header-left">
                <i></i>
                <div className="title">{title}</div>
                <div className="tab">
                    {
                        keyWords.map(item=>{
                            return (
                                <Fragment key={item}>
                                    <a href="#">{item}</a> 
                                    <span className="divider"> |</span>
                                </Fragment>
                            )
                        })
                    }
                 
                </div>
            </div>
            <div className="header-right">
                <a href="#">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})

ThemeHeaderRCM.propTypes={
    title: PropTypes.string,
    keyWords:PropTypes.array
}
ThemeHeaderRCM.defaultProps = {
    title: 'aaaaa',
    keyWords:[]
};



export default memo(ThemeHeaderRCM)
