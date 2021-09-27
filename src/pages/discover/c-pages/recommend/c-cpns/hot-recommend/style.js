import styled from "styled-components";

export const SongList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const SongsCover = styled.div`
    width: 140px;
    height: 140px;
    background: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;
    img{
        width: 100%;
    }
    .songName{
        position: absolute;
        bottom: 0;
        font-size: 14px;
    }
`
