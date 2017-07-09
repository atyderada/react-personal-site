import React, { Component, PropTypes } from 'react';
import Container from '../theme/grid/Container';
import styled from 'styled-components';

const Image = styled.img `
    flex: 'start'
`;

export default class Home extends Component {
    static propsTypes = {};

    render() {
        return (
            <Container>
                <h1> Hello World from Home!</h1>
                <Image src={require('../assets/images/portfolio-image.png')} alt="portrait picture" />
                <p>Hello I am Anthony</p>
            </Container>
        );
    }
}