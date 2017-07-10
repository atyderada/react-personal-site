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

export const Content = styled.div `
    margin-top: 7vh;
    z-index: 1;

    @media screen and (max-width: 750px) {
        margin-top: 5vh;
    }

    @media screen and (max-width: 500px) {
        margin-top: 4vh;
    }
`;

export const ImageContainer = styled.div `
    overflow: hidden;
    width: 70%;
    display: block;
    margin: auto;

    @media screen and (max-width: 850px) {
        width: 80%
    }

    @media screen and (max-width: 500px) {
        width: 100%
    }
`;

export const Image = styled.img `
    width: 100%;
    transition: transform .2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const RevealTitle =  styled.p `
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    margin: 0px 130px;
    padding: 50px 0px 25px;
    position: relative;

    @media screen and (max-width: 750px) {
        font-size: 15px;
        margin: 0px 100px;
        padding: 30px 0px 20px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        margin: 0px 70px;
         padding: 15px 0px 10px;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;

        transform-origin: left;
        transform: rotateY(90deg);

        transition: transform 2s;
    }

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}
`;

export const RevealText =  styled.p `
    font-size: 15px;
    text-align: justify;
    text-justify: inter-word;
    position: relative;

    @media screen and (max-width: 750px) {
        font-size: 11px;
    }

    @media screen and (max-width: 500px) {
        font-size: 9px;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;

        transform-origin: right;
        transform: rotateY(90deg);

        transition: transform 1.5s;
    }

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}
`;

export const SportsCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ParallexText = styled.div `
    width: 280px;
    height: auto;
    z-index: -10;
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