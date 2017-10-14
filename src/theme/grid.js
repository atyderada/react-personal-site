import styled from 'styled-components';

export const Container = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    margin: auto;

    @media screen and (max-width: 850px) {
        width: 70%
    }

    @media screen and (max-width: 500px) {
        width: 75%
    }
`;
