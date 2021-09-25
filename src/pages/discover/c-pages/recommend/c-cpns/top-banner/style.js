import styled from 'styled-components';
import download from '@/assets/img/download.png';
import  banner_sprite from '@/assets/img/banner_sprite.png';

export const BannerWrapper = styled.div`
    background: url(${props => props.bgImage}) center center/6000px;
    .banner {
        height: 270px;
        //background-color: pink;
        display: flex;
        justify-content: center;
        position: relative;
    }
`

export const BannerLeft = styled.div`
    width: 730px;
    background: green;

    .banner-item {
        overflow: hidden;
        height: 270px;
        img {
            width: 100%;
        }
    }
`

export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
    width: 254px;
    height: 270px;
    background: url(${download});
`

export const BannerControl = styled.div`
    width: 960px;
    position: absolute;
    left: 50%;
    top: 45%;
    right: 0;
    transform: translate(-50%);
    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${banner_sprite});
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, .1);
        }
    }

    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`
