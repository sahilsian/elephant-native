import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import SubCategories from "../../SubCategories";
import Header from "../../Header";
import {MyContext} from '../../context'
import axios from 'axios';


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
    width: 90%;
    flex: 1;
    align-items: center;
    flexDirection: row;
    flexWrap: wrap;
    justify-content: space-around;
`;

const HeaderContainer = styled.View`
    width: 90%;
    flex: 1;
    height: 100px;
    justify-content: center;
    margin-top: 10px;
`;

var bgcolor = [
    "#5C80BC", //dark blue
    "#AFD2E9", //light blue
    "#EBC1AD", //sand
    "#4D5061", //black
    "#5C80BC", //dark blue
    "#AFD2E9", //light blue
    "#EBC1AD", //sand
    "#4D5061", //black
    "#5C80BC", //dark blue
    "#AFD2E9", //light blue
    "#EBC1AD", //sand
    "#4D5061", //black
    "#5C80BC", //dark blue
    "#AFD2E9", //light blue
    "#EBC1AD", //sand
    "#4D5061", //black
    "#5C80BC", //dark blue
    "#AFD2E9", //light blue
    "#EBC1AD", //sand
    "#4D5061", //black
    "#5C80BC", //dark blue
    "#AFD2E9", //light blue
    "#EBC1AD", //sand
    "#4D5061", //black
    
  ];

const SubCategoryPage = ({match, history}) => {
    const [data, setData] = useState([]);
    const [children, setChildren] = useState([]);
    const context = useContext(MyContext);
    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

    useEffect(() => {

        var config = {
            method: 'get',
            url: `http://elephantidsp.herokuapp.com/category/findone/${match.params.name}`,
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${context.token}`
            }
        };

        axios(config)

        .then(function (response) {
            console.log();
            setData(response.data)
            setChildren(response.data.children)
            console.log(children)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

  return (
    <Container>
        <TopNavBar></TopNavBar>
        <NavBar home={()=> {
            history.push("/home")
        }}
        homeicon={require('../../../assets/Home.png')}
        search={()=> {
            history.push("/search/general")
        }} calendar={()=> {
            history.push("/calendarpage")
        }} account={()=> {
            history.push(`/profile/${"ownprofile"}`, {
                ownprofile: true,
                page: "home"
            })
        }}></NavBar>    
     
        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center"
                }}
                style={{
                    width: "100%",
                }}
                >
                <HeaderContainer>
                    <Header
                        text={match.params.name}
                        padding
                        marginBottom={"0px"}
                        onPress={() => history.push(`/home`)}
                    >
                    </Header>
                </HeaderContainer>

                <ItemContainer>
                {children.map((o,i)=>{
                    return <SubCategories text={o.name} bgColor={bgcolor[i]} onPress={() => {
                        history.push(`/search/${o.name}`, {
                            category: match.params.name
                        })
                    }
                    }/>
                })}
                </ItemContainer>

            </ScrollView>
        </AdjustedWidth>

    </Container>

  );
};

SubCategoryPage.defaultProps = {};

export default SubCategoryPage;
