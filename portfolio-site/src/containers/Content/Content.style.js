import styled, {css} from 'styled-components';

export const OuterContainer = styled.div `
    margin-top: 8vh;
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

export const SectionContainer = styled.div `
    padding-top: 70px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        padding-top: 50px;
    }

    @media screen and (max-width: 500px) {
        padding-top: 40px;
    }
`;

export const RevealTitle =  styled.p `
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    margin: 0px 130px;
    position: relative;

    @media screen and (max-width: 750px) {
        font-size: 15px;
        margin: 0px 100px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        margin: 0px 70px;
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

    > p {
        font-size: 10pt;
    }
`;