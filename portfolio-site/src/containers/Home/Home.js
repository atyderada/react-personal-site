import React, { Component } from 'react';
import {
    MainScreen,
    Header,
    HeaderButton,
    Footer,
    FooterButton
} from './Home.style';
import Content from '../Content/Content';

export default class Home extends Component {
    static propsTypes = {};

    render() {
        return (
            <MainScreen>

                <Header>
                    <HeaderButton>
                      <a href="#home">
                        <img
                        style={{ width: '3.4vh', height: '3.4h', marginTop: '0.4vh'}}
                        src={require('../../assets/images/personal-logo.png')} alt='Adr-logo' />
                      </a>
                    </HeaderButton>
                    <HeaderButton> <a href="#about">About</a> </HeaderButton>
                    <HeaderButton> <a href="#sites">Websites</a> </HeaderButton>
                    <HeaderButton> <a href="#photos">Photography</a> </HeaderButton>
                    <HeaderButton> <a href="#sports">Sports</a> </HeaderButton>
                    <HeaderButton> <a href="#music">Music</a> </HeaderButton>
                </Header>
                <Content id="home">
                </Content>
                <Footer>
                    <FooterButton>
                        <a href="mailto:anthonyderada@gmail.com" target="_top">
                            <img src={require('../../assets/images/gmail-icon.png')} alt="email" />
                        </a>
                    </FooterButton>
                    <FooterButton>
                        <a href="https://www.instagram.com/tony_derada/" target="_blank">
                            <img src={require('../../assets/images/Instagram-icon.png')} alt="instagram" />
                        </a>
                    </FooterButton>
                    <FooterButton>
                        <a href="https://www.facebook.com/AtyDeRada" target="_blank">
                            <img src={require('../../assets/images/facebook-icon.png')} alt="facebook" />
                        </a>
                    </FooterButton>
                    <FooterButton>
                        <a href="https://www.linkedin.com/in/anthony-de-rada/" target="_blank">
                            <img src={require('../../assets/images/linkedin-icon.png')} alt="linkedIn" />
                        </a>
                    </FooterButton>
                </Footer>

            </MainScreen>
        );
    }
}
