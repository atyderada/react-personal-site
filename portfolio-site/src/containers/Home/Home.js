import React, { Component, PropTypes } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Container } from 'theme/grid';
import WhenInView from 'components/WhenInView/WhenInView';
import {
    MainScreen,
    Header,
    HeaderButton,
    Content,
    Image,
    ImageContainer,
    RevealTitle,
    RevealText,
    SportsCard,
    ParallexText,
    Footer,
    FooterButton
} from './Home.style'; 

export default class Home extends Component {
    static propsTypes = {};

    render() {
        return (
            <MainScreen>

                <Header>
                    <HeaderButton> <a href="#about">About</a> </HeaderButton>
                    <HeaderButton> <a href="#sites">Websites</a> </HeaderButton>
                    <HeaderButton> <a href="#photos">Photography</a> </HeaderButton>
                    <HeaderButton> <a href="#sports">Sports</a> </HeaderButton>
                    <HeaderButton> <a href="#music">Music</a> </HeaderButton>
                </Header>

                <Content>

                    <ImageContainer>
                        <Image src={require('../../assets/images/landing-image-long.jpg')} alt="portrait picture" />
                    </ImageContainer>

                    <Container>
                        <div id="about">
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
                        </div>

                        <div id="sites">
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
                        </div>

                        <div id="photos">
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
                        </div>

                        <div id="sports">
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
                            
                            <SportsCard>
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
                            </SportsCard>

                            <SportsCard>
                                <Parallax
                                    className="custom-class"
                                    offsetYMax={6}
                                    offsetYMin={-12}
                                    offsetXMax={-45}
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
                                    offsetXMax={30}
                                    offsetXMin={0}
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
                            </SportsCard>

                            <SportsCard>
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
                            </SportsCard>
                            
                        </div>

                        <div id="music">
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
                        </div>
                    
                    </Container>

                </Content>

                <Footer>
                    <FooterButton>
                        <a href="mailto:anthonyderada@gmail.com" target="_top">
                        <Image src={require('../../assets/images/gmail-icon.png')} alt="email" />
                        </a>
                    </FooterButton>
                    <FooterButton>
                        <a href="https://www.instagram.com/atyderada/" target="_blank">
                        <Image src={require('../../assets/images/Instagram-icon.png')} alt="instagram" />
                        </a>
                    </FooterButton>
                    <FooterButton>
                        <a href="https://www.facebook.com/AtyDeRada" target="_blank">
                        <Image src={require('../../assets/images/facebook-icon.png')} alt="facebook" />
                        </a>
                    </FooterButton>
                    <FooterButton>
                        <a href="https://www.linkedin.com/in/anthony-de-rada/" target="_blank">
                        <Image src={require('../../assets/images/linkedin-icon.png')} alt="linkedIn" />
                        </a>
                    </FooterButton>
                </Footer>

            </MainScreen>
        );
    }
}
