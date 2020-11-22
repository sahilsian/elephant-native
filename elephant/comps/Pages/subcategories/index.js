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
    flexDirection: row;
    flexWrap: wrap;
`;

const HeaderContainer = styled.View`
    width: 90%;
    flex: 1;
`;

const SubCategoryPage = ({match}) => {
    const [data, setData] = useState([]);
    const [child, setChild] = useState([]);
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
            console.log("works")
            setData([response.data])
            console.log(response.data)
            setChild([response.data.children])
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

  return (
    <Container>
        <TopNavBar></TopNavBar>
        {/* <NavBar></NavBar>    */}
     
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
                        height="70px"
                    >
                    </Header>
                </HeaderContainer>

                <ItemContainer>
                {child && child.map((o,i)=>{
                    <SubCategories text={o.name}/>
                })}
                </ItemContainer>

            </ScrollView>
        </AdjustedWidth>

    </Container>

  );
};

SubCategoryPage.defaultProps = {};

export default SubCategoryPage;
