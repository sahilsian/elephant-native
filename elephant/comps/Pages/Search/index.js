import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Header from "../../Header";
import {MyContext} from '../../context'
import axios from 'axios';
import SearchResult from "../../searchResult";


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
    align-items: center;
`;

const HeaderContainer = styled.View`
    width: 90%;
    flex: 1;
    height: 100px;
    justify-content: center;
    margin-top: 10px;
`;

const Search = ({match, history, location}) => {

  const [data, setData] = useState([]);
    const [children, setChildren] = useState([]);
    const context = useContext(MyContext);
    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

    useEffect(() => {

        var config = {
            method: 'get',
            url: `http://elephantidsp.herokuapp.com/user/educators`,
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${context.token}`
            }
        };  

        axios(config)

        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

  return (
    <Container>
        <TopNavBar ></TopNavBar>
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

                <HeaderContainer>
                    <Header
                        text={match.params.subname}
                        padding
                        marginBottom={"0px"}
                        onPress={()=> {
                            history.push(`/category/${location.state.category}`)
                        }}
                    > 
                    </Header>
                </HeaderContainer>
                
                <ItemContainer>

                
                {data && data.map((o, i)=> {
                    return <SearchResult
                    name={o.name}
                    description={o.description}
                    onPress={() => {
                        history.push(`/profile/${o._id}`, {
                            subname: match.params.subname
                        })
                    }}               
                    />
                })}

                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

Search.defaultProps = {};

export default Search;
