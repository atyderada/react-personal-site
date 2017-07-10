import styled, {css} from 'styled-components';

export const MainScreen = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div `
    position: fixed;
    top: 0;
    left: 10%;
    width: 80%;
    height: 7vh;
    min-height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;

    z-index: 10;


    @media screen and (max-width: 750px) {
        height: 5vh;
        min-height: 35px;
    }

    @media screen and (max-width: 500px) {
        height: 4vh;
        left: 0;
        width: 100%;
        min-height: 28px;
    }
`;

export const HeaderButton = styled.p `
    cursor: pointer;
    font-size: 18px;

    transition: transform .2s;

    &:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 750px) {
        font-size: 12px;
    }

    @media screen and (max-width: 500px) {
        font-size: 8px;
    }
`;

export const Footer = styled.div `
    width: 80%;
    margin: 40px 10% 30px;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;

    z-index: 10;


    @media screen and (max-width: 750px) {
        height: 5vh;
        min-height: 35px;
        margin: 30px 10% 15px;
    }

    @media screen and (max-width: 500px) {
        height: 4vh;
        margin: 25px 10% 5px;
    }
`;

export const FooterButton = styled.span `

    width: 35px;
    height: 35px;

    transition: transform .3s;

    > a > img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.3);
    }

    @media screen and (max-width: 750px) {
        width: 25px;
        height: 25px;
    }

    @media screen and (max-width: 500px) {
        width: 15px;
        height: 15px;
    }
`