/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { InfoLabel } from "./InfoLabel";

const Table = styled.div`
    width: 48%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: center;
`;


const LeftColumn = styled.div`
    width: 180px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

`;

const RightColumn = styled.div`
    width: 180px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
    align-items: flex-end;
`;

const TableLabels = (props) => {
    // eslint-disable-next-line react/prop-types
    const { 
        button_1,
        button_2,
        button_3,
        button_4,
        button_5,
        button_6,
        button_7,
        button_8,
        button_9,
        button_10,
    } = props;
    return(
        <Table>
            <LeftColumn>
                <InfoLabel>{ button_1 }</InfoLabel>
                <InfoLabel>{ button_2 }</InfoLabel>
                <InfoLabel>{ button_3 }</InfoLabel>
                <InfoLabel>{ button_4 }</InfoLabel>
                <InfoLabel>{ button_5 }</InfoLabel>                
            </LeftColumn>

            <RightColumn>
                <InfoLabel>{ button_6 }</InfoLabel>
                <InfoLabel>{ button_7 }</InfoLabel>
                <InfoLabel>{ button_8 }</InfoLabel>
                <InfoLabel>{ button_9 }</InfoLabel>
                <InfoLabel>{ button_10 }</InfoLabel>
            </RightColumn>
            
        </Table>
    );
}

export { TableLabels };
