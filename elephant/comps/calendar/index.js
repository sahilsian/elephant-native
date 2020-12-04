import React from "react";
import { EdgeInsetsPropType, View } from 'react-native';
import styled from 'styled-components'

const Wrapper = styled.View`
    width: 100%;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Date = styled.View`
    flex: 1;
    margin: 2px;
    height: 80px;
    min-width: 45px;
    align-items: center;
`;

const Number = styled.Text`
    font-size: 16px;
`;

const Circle = styled.View`
    width: 25px;
    height: 25px;
    background-color: ${props=>props.backgroundColor ? "#5C80BC" : "transparent"}
    border-radius: 100px;
    margin-top: 10px;
`;


const Calendar = ({number, backgroundColor}) => {


    return (
            <Date>
                <Number>{number}</Number>
                <Circle backgroundColor={backgroundColor}></Circle>
            </Date>
    )
}

Calendar.defaultProps = {
    number: 1
}

export default Calendar