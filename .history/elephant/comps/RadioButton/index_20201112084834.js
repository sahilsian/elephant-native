import React from "react";
import styled from "styled-components/native";

const RadioButtonContainer = style.View`
    background: #B8B9BD;
    border: 1px solid #C4C4C4;
    background: #FFFFFF;
    border-radius: 8px;
    height: 260px;
    width: 260px;
`;

const CircleBox = style.View`
    margin-left: 10px;
    margin-top: 15px;
    background: #FFFFFF;
    background: ${props=>props.active===true ?  "#FFFFFF" : "#5C80BC"};
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 15px;
    height: 18px;
    width: 18px;
`;

const ButtonText = styled.Text`
    margin-left: 30px;
    margin-top: 0px;
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    color: #00000;
`;


const RadioButton = ({text1, text2, text3, text4, text5, text6, text7}) => {
    const [active, setActive] = useState(true);
    return <View>
        <RadioButtonContainer active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >
        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text1}</ButtonText>

        </CircleBox>

        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text2}</ButtonText>

        </CircleBox>

        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text3}</ButtonText>

        </CircleBox>

        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text4}</ButtonText>

        </CircleBox>

        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text5}</ButtonText>

        </CircleBox>

        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text6}</ButtonText>

        </CircleBox>

        <CircleBox active = {active} 
        onClick={() => {
            setActive(!active);
        }}
    >  
        <ButtonText>{text7}</ButtonText>

        </CircleBox>

    </RadioButtonContainer>
    </View> 
}

RadioButton.defaultProps = {
    color: null,
    text1: "Autism",
    text2: "DownSyndrome",
    text3: "ADD/ADHD",
    text4: "FragileXSyndrome",
    text5: "ApertSyndrome",
    text6: "WilliamsSyndrome",
    text7: "DevelopmentalDelays"
}

export default RadioButton;