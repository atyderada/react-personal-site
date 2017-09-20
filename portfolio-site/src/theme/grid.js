import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    display: block;
    margin: auto;

    @media screen and (max-width: 850px) {
        width: 65%
    }

    @media screen and (max-width: 500px) {
        width: 60%
    }
`;
