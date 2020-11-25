import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Calendar from "../../calendar"
import { MyContext } from "../../context"
import axios from "axios"

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
`;

const Wrapper = styled.View`
    width: 100%;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Dates = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    align-items: center;
`;

const Date = [
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun"
]

const CalendarPage = ({history}) => {

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
            console.log(response.data, "connections");
            setData(response.data)
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
        }}></NavBar>   

        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center",
                    flexGrow: 1
                }}
                style={{
                    width: "100%"
                }}
                >
                
                <ItemContainer>
                <Dates>
                    {Date.map((o, i) => {
                    return <TextComp text={o}></TextComp>
                    }) 
                    }
                </Dates>
                <Wrapper>
                    <Calendar></Calendar>
                </Wrapper>

                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

CalendarPage.defaultProps = {};

export default CalendarPage;
