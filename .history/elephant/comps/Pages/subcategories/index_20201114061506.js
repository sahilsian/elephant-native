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
        {/* <NavBar></NavBar>    */}
     
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
                <View style={{
                    flex: 1,
                    width: 500,
                    height: 500,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingVertical: 0,
                    borderTopWidth: 50,
                    borderLeftWidth: 0,
                    borderBottomWidth: 50,
                }}>
                    <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    paddingHorizontal: 0,
                    paddingBottom: 0,
                    marginVertical: 10,
                    borderTopWidth: 0,
                    }} />
                    <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    marginVertical: 10,
                    borderBottomWidth: 10,
                    }} />
                    <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    marginVertical: 10,
                    }} />
                    <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    marginVertical: 10,
                    }} />
                </View>
                );
                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

SubCategoryPage.defaultProps = {};

export default SubCategoryPage;
