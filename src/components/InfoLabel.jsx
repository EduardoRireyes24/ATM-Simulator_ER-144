import { styled } from "styled-components";

const Label = styled.h2`
    width: 90%;
    height: 80px;
    font-size: 40px;    
    display: grid;
    place-content: center;
    white-space: nowrap;
`;

// eslint-disable-next-line react/prop-types
const InfoLabel = ({children}) => {
    return(
        <Label>{children}</Label>
    );

}

export { InfoLabel };