import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    .header-left{
        display: flex;
        align-items: center;
        .title{
            font-size: 20px;
            margin-right: 15px;
        }
        .tab{
            a,.divider{
                display: inline-block;
                padding: 0 5px;
            }
        }

    }
    .header-right{
        display: flex;
        align-items: center;
        .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            background-position: 0 -240px;
        }
    }

`