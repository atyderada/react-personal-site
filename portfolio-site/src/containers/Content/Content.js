import React, { Component  } from 'react';
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
import AmCharts from '@amcharts/amcharts3-react';
import 'ammap3/ammap/ammap'

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

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
                                    About Me Text
                                    // I was born and raised in the vibrant city of La Paz, Bolivia. I couldn't be
                                    // more grateful for growing up in such a unique place with a diverse culture and customs.
                                    // I recently started documenting many of these and capturing the magical moments. You can
                                    // see some of them in the photograpy section of the page.
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
                                    Websites Section
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
                                    Display photos here
                                </RevealText>
                            }
                        </WhenInView>
                    </SectionContainer>

                    <SectionContainer id="travel">
                        <WhenInView>
                            {({ isInView }) =>
                                <RevealTitle hide={!isInView}>
                                    Travel
                                    <hr />
                                </RevealTitle>
                            }
                        </WhenInView>

                        <WhenInView>
                            {({ isInView }) =>
                                <RevealText hide={!isInView}>
                                    <p>Travelling is one of my favorite hobbies</p>
                                    <p>Here you can see an interactive map with the countries Ive been to</p>
                                </RevealText>
                            }
                        </WhenInView>

                        <AmCharts.React
                          style={{
                            width: "95%",
                            height: "450px",
                            margin: "auto",
                          }}
                          options={{
                            "type": "map",
                            "theme": "dark",
                            "projection": "miller",
                            "background-color" : "#ffffff",
                            "dataProvider": {
                              "map": "worldLow",
                              "getAreasFromMap": false,
                              "areas" :
                              [
                              	{
                              		"id": "HR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "CZ",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "DK",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "EE",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "FR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "DE",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "GR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "IT",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "LV",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "LI",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "LT",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "RU",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "ES",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "SE",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "GB",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "VA",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "CR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "CW",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "DO",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "HT",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "JM",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "MX",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "PR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "US",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "AR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "BO",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "BR",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "CL",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "CO",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "PY",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "PE",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "UY",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "VE",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "EG",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "NA",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "ZA",
                              		"showAsSelected": true
                              	},
                              	{
                              		"id": "JP",
                              		"showAsSelected": true
                              	}
                              ]
                            },
                            "areasSettings" : {
                              "autoZoom" : true,
                              "color" : "#ffffff",
                              "colorSolid" : "#ffffff",
                              "selectedColor" : "#777777",
                              "outlineColor" : "#dddddd",
                              "rollOverColor" : "#ffffff",
                              "rollOverOutlineColor" : "#777777"

                            }
                          }}
                          />

                    </SectionContainer>
                </Container>
            </OuterContainer>
        );
    }
}
