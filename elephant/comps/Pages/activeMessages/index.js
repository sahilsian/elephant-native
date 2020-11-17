import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text, Image } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import { Header } from "react-native/Libraries/NewAppScreen";

import ProfileName from '../../ProfileName';


const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 1;
`;

const AdjustedWidth = styled.View`
    width: 100%;
    flex: 0.81;
`;

const ItemContainer = styled.View`
    width: 80%;
    flex: 1;
    alignItems: center;
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-around;
`;

const Head = styled.Text`
fontSize: 26px;
color: #191716;
fontWeight: 500;
`


const Profile = styled.View`
width: 70%;
display: flex;
 
`

const Back = styled.Image`
display: flex;
alignSelf: flex-end;
bottom: 8%; 
left: 15%;
`

const MainTemplate = ({}) => {

    const [shadow, setShadow] = useState(false)

  return (
    <Container>
        <TopNavBar Shadow={shadow}></TopNavBar>

        <NavBar></NavBar>   

        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center"
                }}
                style={{
                    width: "100%",
                }}
                >
                
                <ItemContainer>
                   <Head>Active Messages</Head> 
        
                    <Profile>
                         <ProfileName text="Kai Erfle" subText="Designer"></ProfileName>
                        <Back source={require('../../../assets/Back.png')}></Back>
                   </Profile>

                   <Profile>
                         <ProfileName text="Emmy Wong" subText="Back-End Programer"></ProfileName>
                        <Back source={require('../../../assets/Back.png')}></Back>
                   </Profile>

                   <Profile>
                         <ProfileName text="GaEun Park" subText="Project/Team Manager"></ProfileName>
                        <Back source={require('../../../assets/Back.png')}></Back>
                   </Profile>
                   
                   <Profile>
                         <ProfileName text="Sahil Sian" subText="Front-End Programer"></ProfileName>
                        <Back source={require('../../../assets/Back.png')}></Back>
                   </Profile>

                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

MainTemplate.defaultProps = {};

export default MainTemplate;
