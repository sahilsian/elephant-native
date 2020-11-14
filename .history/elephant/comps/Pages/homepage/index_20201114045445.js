import React, {useState} from "./node_modules/react";
import styled from "./node_modules/styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Categories from "../../Categories";

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

const InterestContainer = styled.View`
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
    justifyContent: 'space-evenly'  
`;


const HomePage = ({}) => {

    const [shadow, setShadow] = useState(false)

    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

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

                <InterestContainer>
                    <Categories text="Outdoor Activities"/>
                    <Categories text="Math"/>
                </InterestContainer>

                <InterestContainer>
                    <Categories text="Sports"/>
                    <Categories text="Video Games"/>
                </InterestContainer>

                <InterestContainer>
                    <Categories text="Socializing" />
                    <Categories text="Art"/>
                </InterestContainer>

                <InterestContainer>
                    <Categories text="Spelling"/>
                    <Categories text="Language"/>
                </InterestContainer>

                </ItemContainer>
                
            </ScrollView>
        </AdjustedWidth>

    </Container>
  );
};

HomePage.defaultProps = {};

export default HomePage;
