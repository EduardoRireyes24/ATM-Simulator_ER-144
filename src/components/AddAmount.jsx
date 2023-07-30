import { styled } from "styled-components";
import { Container } from "./Container";

const Title = styled.h1`
    width: 90%;
    font-size: 40px;
    text-align: center;
`;

const Box = styled.input`
    width: 220px;
    height: 80px;
    font-size: 40px;
    text-align: center;
    border: 2px solid black;
    border-radius: 5px;
    
`;

const AddAmount = () => {
    return(
        <Container>
            <Title>Ingrese Cantidad</Title>
            <form action="">
               <Box placeholder="000.00"></Box> 
            </form>
        </Container>
    );
}

export { AddAmount }