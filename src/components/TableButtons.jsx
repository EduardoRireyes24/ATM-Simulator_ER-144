import { styled } from "styled-components";
import { PysicalButton } from "./PhysicalButton";

const Table = styled.div`
    width: 90%;
    height: 600px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10%;
    z-index: 1;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: center;
`;

const LeftColumn = styled.div`
    width: 100px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const RightColumn = styled.div`
    width: 100px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;    
`;

const TableButton = () => {
    return (
        <Table>
            <LeftColumn>
                
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>

            </LeftColumn>
            <RightColumn>

                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>
                <PysicalButton></PysicalButton>

            </RightColumn>
        </Table>
    );
}

export { TableButton }