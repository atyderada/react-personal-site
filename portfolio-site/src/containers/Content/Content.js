import React, { Component  } from 'react';
import { Container } from 'theme/grid';
import { Parallax } from 'react-scroll-parallax';
import WhenInView from 'components/WhenInView/WhenInView';
import {
    OuterContainer,
    SectionContainer,
    Image,
    ImageContainer,
    IconsContainer,
    Icon,
    PhotoGallery,
    Row,
    PhotoContainerR,
    PhotoContainerL,
    MapContainer,
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
                <ImageContainer id="home">
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
                                    I am a 21 year old computer science student at the Rose Hulman Institute of technology.
                                    I was born and raised in the vibrant city of La Paz, Bolivia. I am passionate about my
                                    work, photograpy, travel, fitness and music. I made this site to share these things with you !
                                </RevealText>
                            }
                        </WhenInView>

                        <IconsContainer>
                          <a href="https://www.youtube.com/playlist?list=PLFTQSQOjNIfNKpVekjwU3pzDtlZBKVYp3" target="_blank">
                            <Icon src={require('../../assets/images/bolivia-map.png')} alt="Bolivia map" />
                          </a>
                          <a href="http://www.rose-hulman.edu/" target="_blank">
                            <Icon src={require('../../assets/images/rose-hulman.png')} alt="Rose Hulman Icon" />
                          </a>
                        </IconsContainer>
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
                                    I love creating clean and beautiful sites from the ground up like this one. I enjoy designing,
                                    developing and improving websites with top of the line technologies. I used InDesign, React and
                                    Firebase to develop this site. Stay tuned as I finish my portfolio site built on Angular 4 that
                                    showcases all my projects.
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
                                    I recently picked up Photography as a hobby. Here are my favorite shots from last summer.
                                </RevealText>
                            }
                        </WhenInView>

                        <PhotoGallery>
                          <Row>
                            <PhotoContainerR>
                              <Image src={require('../../assets/photos/CloudsTrain.JPG')} alt="portrait picture" />
                            </PhotoContainerR>
                            <PhotoContainerR>
                              <Image src={require('../../assets/photos/MinuteToOne.JPG')} alt="portrait picture" />
                            </PhotoContainerR>
                            <PhotoContainerR>
                              <Image src={require('../../assets/photos/SandHotelSunset.JPG')} alt="portrait picture" />
                            </PhotoContainerR>
                          </Row>
                          <Row>
                            <PhotoContainerL>
                              <Image src={require('../../assets/photos/TheBeginning.JPG')} alt="portrait picture" />
                            </PhotoContainerL>
                            <PhotoContainerL>
                              <Image src={require('../../assets/photos/TheEnd.jpg')} alt="portrait picture" />
                            </PhotoContainerL>
                          </Row>
                          <Row>
                            <PhotoContainerR>
                              <Image src={require('../../assets/photos/BarcelonaCoast.JPG')} alt="portrait picture" />
                            </PhotoContainerR>
                            <PhotoContainerR>
                              <Image src={require('../../assets/photos/Details.JPG')} alt="portrait picture" />
                            </PhotoContainerR>
                            <PhotoContainerR>
                              <Image src={require('../../assets/photos/Perspective.JPG')} alt="portrait picture" />
                            </PhotoContainerR>
                          </Row>
                        </PhotoGallery>
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
                                  I love traveling. Check out the map bellow with the countries that I have visited !
                                </RevealText>
                            }
                        </WhenInView>

                        <MapContainer>
                          <AmCharts.React
                            style={{
                              width: "100%",
                              height: "100%",
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
                        </MapContainer>

                    </SectionContainer>
                </Container>
            </OuterContainer>
        );
    }
}
