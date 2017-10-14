import styled, {css} from 'styled-components';

export const OuterContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 5;
    margin-top: 6.5vh;
    background-color: transparent;

    @media screen and (max-width: 1050px) {
        margin-top: 5.5vh;
    }

    @media screen and (max-width: 800px) {
        margin-top: 5vh;
    }

    @media screen and (max-width: 550px) {
        margin-top: 4.5vh;
    }
`;

export const ImageContainer = styled.div `
    overflow: hidden;
    width: 70%;
    display: block;
    margin: auto;
    opacity: 0.89;

    @media screen and (max-width: 1050px) {
        width: 75%
    }

    @media screen and (max-width: 800px) {
        width: 80%
    }

    @media screen and (max-width: 550px) {
        width: 100%
    }
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    transition: transform .2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const SectionContainer = styled.div `
    padding-top: 6.6vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1050px) {
        padding-top:: 5.6vh;
    }

    @media screen and (max-width: 800px) {
        padding-top:: 5.1vh;
    }

    @media screen and (max-width: 550px) {
        padding-top:: 4.6vh;
    }
`;

export const RevealTitle =  styled.p `
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    margin: 0px 130px;
    position: relative;

    @media screen and (max-width: 1050px) {
        font-size: 17px;
        margin: 0px 110px;
    }

    @media screen and (max-width: 800px) {
        font-size: 15px;
        margin: 0px 100px;
    }

    @media screen and (max-width: 550px) {
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
    font-size: 12pt;
    line-height: 18pt;
    text-align: justify;
    text-justify: inter-word;
    position: relative;

    @media screen and (max-width: 1050px) {
        font-size: 10pt;
    }

    @media screen and (max-width: 800px) {
        font-size: 9pt;
    }

    @media screen and (max-width: 550px) {
        font-size: 7pt;
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

export const IconsContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3vh;
`;

export const Icon = styled.img `
    width: 150px;
    height: 150px;
    transition: transform .2s;
    margin-top: 4px;
    opacity: 0.87;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 1050px) {
        margin-top: 2px;
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width: 800px) {
        margin-top: 0px;
        width: 70px;
        height: 70px;
    }
`;

export const PhotoGallery = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  @media screen and (max-width: 1050px) {
      margin-top: 2px;
  }

  @media screen and (max-width: 800px) {
      margin-top: 0px;
  }
`;

export const Row = styled.div `
  display: flex;
  flex-direction: row;
  height: 27vh;

  @media screen and (max-width: 1300px) {
      height: 22vh;
  }

  @media screen and (max-width: 1050px) {
      height: 15vh;
  }

  @media screen and (max-width: 800px) {
      height: 12vh;
  }
`;

export const PhotoContainerR = styled.div `
  -webkit-transform: skew(-2deg);
     -moz-transform: skew(-2deg);
       -o-transform: skew(-2deg);
  overflow: hidden;
  margin: 0px 2px 4px;
  flex: 1;
  opacity: 0.87;
`;

export const PhotoContainerL = styled.div `
  -webkit-transform: skew(2deg);
     -moz-transform: skew(2deg);
       -o-transform: skew(2deg);
  overflow: hidden;
  margin: 0px 2px 4px;
  flex: 1;
  opacity: 0.87;
`;

export const MapContainer = styled.div `
  width: 100%;
  height: 50vh;
  margin-top: 10px;
  opacity: 0.87;

  @media screen and (max-width: 1200px) {
      height: 30vh;
  }

  @media screen and (max-width: 800px) {
      height: 25vh;
      margin-top: 4px;
  }
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
