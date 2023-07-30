import { TableButton } from "../components/TableButtons";
import { TableLabels } from "../components/TableLabels";
import { AddAmount } from "../components/AddAmount";

const CustomAmount = () => {
    return(
        <>
           <TableButton></TableButton>
           <TableLabels
            button_5 = "Aceptar"
            button_10 = "Atras"
           ></TableLabels>
           <AddAmount></AddAmount>
        </>
    );
}

export { CustomAmount };