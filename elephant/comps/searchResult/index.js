import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components'
import TextComp from '../Text'

const Container = styled.View`
    width: 100%;
    flex: 1;
    max-height: 140px;
    flex-direction: row;
    margin-bottom: 30px;
`;

const Info = styled.View`
    flex: 3.5;
`;

const ArrowContainer = styled.View`
    align-items: flex-end;
    flex: 1;
`;

const Arrow = styled.Image`

    margin-top: 10px;

`;

const Touch = styled.TouchableOpacity`
`;


const SearchResult = ({name, occupation, description, onPress}) => {
    return <Container>
        <Info>
            <TextComp
                weight={"400"}
                text={name}
                fontSize={"25px"}
            ></TextComp>
            <TextComp
                text={occupation}
                fontSize={18}
                color={"#4D5061"}
            ></TextComp>
            <TextComp
                text={description}
                fontSize={18}
                color={"#4D5061"}
                numOfLines={1}
                Margin={"6px"}
            ></TextComp>

        </Info>
        <ArrowContainer>

            <Touch onPress={onPress}>
                <Arrow source={require("../../assets/Back.png")}>

                </Arrow>
            </Touch>

        </ArrowContainer>
        
    </Container>
}

SearchResult.defaultProps = {
    name: "John Doe",
    occupation: "Student",
    description: "Hi, I am John Doe and I like to snowboard! Snowboarding is very fun."
}

export default SearchResult;