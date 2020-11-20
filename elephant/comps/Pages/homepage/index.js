import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components/native"
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View } from 'react-native';
import NextButton from "../../NextButton"
import Header from "../../Header"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Categories from "../../Categories";
import axios from 'axios';
import { MyContext } from "../../context"

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
    flex-wrap: wrap;
    justify-content: space-around;
`;

const InterestContainer = styled.View`
    flex: 1;
    flexDirection: row;
    justify-content: center;
    padding-top: 50;
    justify-content: space-evenly;
`;

const HeaderContainer = styled.View`
    width: 90%;
    flex: 1;
`;

var bgcolor = [
    "#5C80BC", //dark blue
    "#4D5061", //black
    "#AFD2E9", //light blue
    "#EBC1AD" //sand
  ];


const HomePage = ({ history }) => {

    const [shadow, setShadow] = useState(false)
    const context = useContext(MyContext);
    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

    useEffect(() => {
        axios.post(`http://elephantidsp.herokuapp.com/category/create-category`, {
            headers: {
            'Token': `Bearer ${context.token}`,
            'content-type': 'application/json',

            }
        })

        .then(response => {
            console.log(response, "Woah heres a cool response")
        })

        .catch(error => {
            console.log(error, "bruh what happened ",  context.token)
        })
    }, [])

  return (
    <Container>
        <TopNavBar onPressLeft={() => history.push("/")}></TopNavBar>
        <NavBar></NavBar>   

        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center"
                }}
                style={{
                    width: "100%",
                    flex: 1
                }}
                >
                <HeaderContainer>
                    <Header text={"Home"}>
                    </Header>
                </HeaderContainer>
                
                <ItemContainer>

                    <Categories bgColor={bgcolor[0]} MaxWidth text="Outdoor Activities"/>
                    <Categories bgColor={bgcolor[2]} Color={false} text="Math"/>

                    <Categories bgColor={bgcolor[3]} Color={false} text="Sports"/>
                    <Categories MaxWidth text="Video Games"/>

                    <Categories bgColor={bgcolor[0]} MaxWidth text="Socializing" />
                    <Categories bgColor={bgcolor[2]} Color={false} text="Art"/>

                    <Categories  bgColor={bgcolor[3]} Color={false} text="Spelling"/>
                    <Categories MaxWidth text="Language"/>
                    

                </ItemContainer>
                
            </ScrollView>
        </AdjustedWidth>

    </Container>
  );
};

HomePage.defaultProps = {};

export default HomePage;
