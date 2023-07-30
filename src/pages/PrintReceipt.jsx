import { TableButton } from "../components/TableButtons";
import { TableLabels } from "../components/TableLabels";
import { Container } from "../components/Container";


const PrintReceipt = () => {
    return(
        <>
            <TableButton></TableButton>
            <TableLabels
                button_5 = "Si"
                button_10 = "No"
            ></TableLabels>
            <Container>
                <h1>¿Desea Imprimir Recibo?</h1>
            </Container>
        </>
    );
}

export { PrintReceipt };