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
    flex: 0.85;
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
    height: 80px;
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


const HomePage = ({ history, match }) => {

    const [shadow, setShadow] = useState(false)
    const context = useContext(MyContext);
    const [data, setData] = useState([]);
    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

    useEffect(() => {

        var profile = {
            method: 'get',
            url: 'http://elephantidsp.herokuapp.com/profile',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${context.token}`
            }
        };

        axios(profile)

        .then(function(response) {
            console.log(response.data, "own profile works");
            context.setUser(response.data)
        })

        .catch(function (error) {
            console.log(error);
        });
        

        var config = {
            method: 'get',
            url: 'http://elephantidsp.herokuapp.com/category/all',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${context.token}`
            }
        };

        axios(config)

        .then(function (response) {
            console.log();
            console.log("works")
            setData(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

  return (
    <Container>
        <TopNavBar onPress={()=> {
            history.push("/settings")
        }}></TopNavBar>
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
                    flex: 1
                }}
                >
                <HeaderContainer>
                    <Header text={"Home"} display onPress={() => {

                    }}>
                    </Header>
                </HeaderContainer>
                
                <ItemContainer>

                    {data && data.map((o,i)=>{
                        return <Categories MaxWidth={i%3 == 0} text={o.name} bgColor={bgcolor[i]} onPress={() => {
                            history.push(`/category/${o.name}`)
                        }}/>
                    })}

                    {/* <Categories bgColor={bgcolor[0]} MaxWidth text="Outdoor Activities"/>
                    <Categories bgColor={bgcolor[1]} Color={false} text="Math"/>

                    <Categories bgColor={bgcolor[2]} Color={false} text="Sports"/>
                    <Categories bgColor={bgcolor[3]} MaxWidth text="Video Games"/>

                    <Categories bgColor={bgcolor[0]} MaxWidth text="Socializing" />
                    <Categories bgColor={bgcolor[1]} Color={false} text="Art"/>

                    <Categories  bgColor={bgcolor[2]} Color={false} text="Spelling"/>
                    <Categories bgColor={bgcolor[3]} MaxWidth text="Language"/> */}
                    

                </ItemContainer>
                
            </ScrollView>
        </AdjustedWidth>

    </Container>
  );
};

HomePage.defaultProps = {};

export default HomePage;
