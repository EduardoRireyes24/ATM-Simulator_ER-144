import { styled } from "styled-components";

const Button = styled.button`
    width: 80px;
    height: 80px;
    border: 0;
    border-radius: 10px;
    background-color: gray;
    cursor: pointer;
`;

const PysicalButton = () => {
    return (
        <Button></Button>
    );
}

export { PysicalButton }