import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
    height: 300px;
    position: relative;
    padding-top: 30px;
    
`

export const TopNav = styled.div`
    z-index: 90;
    height: 35px;
    width: 100%;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    position: absolute;
    align-items: center;
    display: flex;
    top: 0;
    .top{
        padding-left:180px;
    }
    .item{
        font-size: 13px;
        color: #fff;
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 0 17px;
        border-radius: 20px;
        text-decoration :none ;
        &:hover,&.active {
            background: #a40011;
         }
    }

`