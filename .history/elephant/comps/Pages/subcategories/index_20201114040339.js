import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import SubCategories from "../../SubCategories";
import Header from "../../Header"


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
    width: 95%;
    flex: 1;
    flexDirection: row;
    flexWrap: wrap;
`;

const SubCategoryPage = ({}) => {

    const [shadow, setShadow] = useState(false)

  return (
    <Container>
        <TopNavBar Shadow={shadow}></TopNavBar>
        <NavBar></NavBar>   

        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"flex-start"
                }}
                style={{
                    width: "100%",
                }}
                >

                <Header
                    text="Sub Categories"
                    height="70px"
                >
                </Header>
                
                <ItemContainer>
                    <SubCategories></SubCategories>
                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

SubCategoryPage.defaultProps = {};

export default SubCategoryPage;
