import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text, Image } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import { Header } from "react-native/Libraries/NewAppScreen";


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
const Sub = styled.Text`
fontSize: 16px;
color: #191716
`

const Profile = styled.View`
width: 100%;
display: flex; 
marginBottom: 10px;
`

const Img = styled.Image`
display: flex;
marginRight: 10px;
`

const Back = styled.Image`
display: flex;
alignSelf: flex-end;
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
                   <Img source={require('../../../assets/photo.png')}></Img>
                        <Head>Kai Erfle</Head>
                        <Sub>Photoshop Classes</Sub>
                        <Back source={require('../../../assets/Back.png')}></Back>
                   </Profile>

                   <Profile>
                   <Img source={require('../../../assets/photo.png')}></Img>
                        <Head>Kai Erfle</Head>
                        <Sub>Photoshop Classes</Sub>
                        <Back source={require('../../../assets/Back.png')}></Back>
                   </Profile>

                   <Profile>
                   <Img source={require('../../../assets/photo.png')}></Img>
                        <Head>Kai Erfle</Head>
                        <Sub>Photoshop Classes</Sub>
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
