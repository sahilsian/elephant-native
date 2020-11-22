import React from "react";
import { EdgeInsetsPropType, View } from 'react-native';
import styled from 'styled-components'

const Wrapper = styled.View`
    width: 100%;
    flex: 1;
    background-color: #fad;
    justify-content: space-between;
    flex-direction: row;
`;

const Column = styled.View`
    flex: 1;
    background-color: #eee;
    margin: 5px;
    borderLeftColor: #000;
    borderLeftWidth: ${props=>props.leftBool ? "0" : "1px"};
    borderRightColor: #000;
    borderRightWidth: ${props=>props.rightBool ? "0" : "1px"};
`;

const Row = styled.View`
    flex: 1;
    background-color: #abc;
    margin: 2px;
`;

const Number = styled.View`
    
`

const Calendar = ({}) => {


    return (
        <Wrapper>
            <Column leftBool>
                <Row>
                </Row>
                <Row>
                </Row>
                <Row>
                </Row>
                <Row>
                </Row>
                <Row>
                </Row>
            </Column>

            <Column>
            </Column>

            <Column>
            </Column>

            <Column>
            </Column>
            
            <Column>
            </Column>
            
            <Column>
            </Column>

            <Column rightBool>
            </Column>
        </Wrapper>
    )
}

export default Calendar