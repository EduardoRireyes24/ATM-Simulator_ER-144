import { styled } from "styled-components";

const Container = styled.div`
    width: 50%;
    height: 352px;
    z-index: 3;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    justify-self: center;
`;

export { Container };