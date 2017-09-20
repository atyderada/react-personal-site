import styled, {css} from 'styled-components';

export const MainScreen = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div `
    position: fixed;
    top: 0;
    left: 15%;
    width: 70%;
    height: 6.5vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;

    z-index: 10;


    @media screen and (max-width: 800px) {
        height: 5vh;
    }

    @media screen and (max-width: 550px) {
        height: 4.5vh;
        width: 100%;
        left: 0;
    }
`;

export const HeaderButton = styled.p `
    cursor: pointer;
    font-size: 16px;
    align-items: center;
    justify-content: center;

    transition: transform .2s;

    &:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 800px) {
        font-size: 10px;
    }

    @media screen and (max-width: 550px) {
        font-size: 8px;
    }
`;

export const Footer = styled.div `
    width: 80%;
    margin: 40px 10% 30px;
    height: 6vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;

    z-index: 10;


    @media screen and (max-width: 800px) {
        height: 5vh;
        min-height: 35px;
        margin: 30px 10% 15px;
    }

    @media screen and (max-width: 550px) {
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

    @media screen and (max-width: 800px) {
        width: 25px;
        height: 25px;
    }

    @media screen and (max-width: 550px) {
        width: 15px;
        height: 15px;
    }
`
