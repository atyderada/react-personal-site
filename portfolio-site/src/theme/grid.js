import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    display: block;
    margin: auto;

    @media screen and (max-width: 850px) {
        width: 70%
    }

    @media screen and (max-width: 500px) {
        width: 75%
    }
`;