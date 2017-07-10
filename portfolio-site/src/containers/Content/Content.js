import React, { Component, PropTypes } from 'react';
import { Container } from 'theme/grid';
import { Parallax } from 'react-scroll-parallax';
import WhenInView from 'components/WhenInView/WhenInView';
import {
    OuterContainer,
    SectionContainer,
    Image,
    ImageContainer,
    RevealTitle,
    RevealText,
    SportsCard,
    ParallexText,
} from './Content.style'; 

export default class Content extends Component {
    static propsTypes = {};

    render() {
        return (
            <OuterContainer>
                <ImageContainer>
                    <Image src={require('../../assets/images/landing-image-long.jpg')} alt="portrait picture" />
                </ImageContainer>

                <Container>

                    <SectionContainer id="about">
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealTitle hide={!isInView}>
                                    About Me
                                    <hr />
                                </RevealTitle>
                            }
                        </WhenInView>
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                    </SectionContainer>

                    <SectionContainer id="sites">
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealTitle hide={!isInView}>
                                    Websites
                                    <hr />
                                </RevealTitle>
                            }
                        </WhenInView>

                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                    </SectionContainer>

                    <SectionContainer id="photos">
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealTitle hide={!isInView}>
                                    Photography
                                    <hr />
                                </RevealTitle>
                            }
                        </WhenInView>

                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                    </SectionContainer>

                    <SectionContainer id="sports">
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealTitle hide={!isInView}>
                                    Sports
                                    <hr />
                                </RevealTitle>
                            }
                        </WhenInView>

                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                        
                        {/*<SportsCard>
                            <Parallax
                                className="custom-class"
                                offsetYMax={8}
                                offsetYMin={-14}
                                offsetXMax={45}
                                offsetXMin={0}
                                slowerScrollRate
                                tag="figure"
                            >
                                <img src={require('../../assets/images/isaiah-thomas.jpg')} alt="isaiah-thomas" width='300px'/>
                            </Parallax>

                            <Parallax
                                className="custom-class"
                                offsetYMax={-10}
                                offsetYMin={2}
                                offsetXMax={-30}
                                offsetXMin={1}
                                slowerScrollRate
                                tag="text"
                            >
                                <ParallexText>
                                    <p> 
                                        I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                        more grateful for growing up in such a unique place with a diverse culture and customs.
                                        I recently started documenting many of these and capturing the magical moments. You can 
                                        see some of them in the photograpy section of the page.
                                    </p>
                                </ParallexText>
                            </Parallax>
                        </SportsCard>*/}
                    </SectionContainer>

                    <SectionContainer id="music">
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealTitle hide={!isInView}>
                                    Music
                                    <hr />
                                </RevealTitle>
                            }
                        </WhenInView>

                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be 
                                    more grateful for growing up in such a unique place with a diverse culture and customs.
                                    I recently started documenting many of these and capturing the magical moments. You can 
                                    see some of them in the photograpy section of the page.
                                </RevealText>
                            }
                        </WhenInView>
                    </SectionContainer>
                </Container>
            </OuterContainer>
        );
    }
}
