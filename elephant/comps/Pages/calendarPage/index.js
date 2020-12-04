import React, {useState, useContext, useEffect, Component} from "react";
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
import Button from "../../Button";
import RadioButtons from "../../radioButtons";
import DatePicker from 'react-native-datepicker';

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
    justify-content: space-around;
    width: 100%;
    height: 50px;
    align-items: center;
    
`;

const AddEvent = styled.View`
    margin: 20px 0;
    width: 100%;
    height: 40px;
    align-items: flex-end;
`;

const Popup = styled.View`
    width: 350px;
    height: 60%;
    background-color: rgba(215, 232, 244, 0.96);
    position: absolute;
    elevation: 8;
    border-radius: 10px;
    padding: 25px;
    top: ${props=>props.popup ? "150px" : "-600px"}
`;

const Row = styled.View`
    height: 90px;
    width: 100%;
    justify-content: space-between;
`;

const FlexRow = styled.View`
    flex-direction: row;
    height: 60px;
    width: 100%;
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

const DateWrapper = styled.View`
    
`;

const CalendarPage = ({history}) => {

    const context = useContext(MyContext);
    const [data, setData] = useState([]);
    const [date, setDate] = useState([]);
    const [activitydate, setActivitydate] = useState([]);
    const [allday, setAllday] = useState(false)
    const [value, onChange] = useState('2:00');

    const [open, setOpen] = useState(false);
    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

    useEffect(() => {

        var profile = {
            method: 'get',
            url: 'http://elephantidsp.herokuapp.com/activity/all',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${context.token}`
            }
        };

        axios(profile)

        .then(function(response) {
            setData(response.data)
            
            
        })

        .catch(function (error) {
            console.log(error);
        });

        setDate(Array.from({ length: 35 }, (_, i) => i + 1));
        
        console.log(activitydate)

        
        
    }, [])

    useEffect(()=> {
        var t_arr = data.map(e=>e.start_time.split(/[-T:.]/)[2]);
        setActivitydate(t_arr);
    }, [data])

    
  return (
    <Container>
        <Popup popup={open}>
            <Row>
                
            </Row>
            <Row>
                <TextComp color={"#4D5061"} fontSize={"20px"} text={"Event Name"}></TextComp>
                <CustomInput placeholder={"Event Name"}></CustomInput>
            </Row>
            <FlexRow>
                <TextComp color={"#4D5061"} fontSize={"20px"} text={"All-Day"}></TextComp>
                <RadioButtons marginLeft={"20px"} text={""} bgcolor={allday ? "#5C80BC" : "#AFD2E9"}></RadioButtons>
            </FlexRow>
            <FlexRow>
                <TextComp mright={"20px"} color={"#4D5061"} fontSize={"20px"} text={"Start Date"}></TextComp>
                <DatePicker
                 />    
            </FlexRow>
            
        </Popup>
        <TopNavBar></TopNavBar>
        <NavBar home={()=> {
            history.push("/home")
        }} search={()=> {
            history.push("/search/general", {
                notcategory: true
            })
        }} 
        calendaricon={require('../../../assets/calender.png')}
        calendar={()=> {
            history.push("/calendarpage")
        }} account={()=> {
            history.push(`/profile/${"ownprofile"}`, {
                ownprofile: true,
                page: "calendarpage"
            })
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
                <AddEvent>
                    <Button onPress={()=> {
                        setOpen(!open);
                    }} buttonText={open ? "Close" : "Add Event"} MaxWidth={"120px"} />
                </AddEvent>
                <Dates>
                    {Date.map((o, i) => {

                    return <DateWrapper>
                        <TextComp color={"#5C80BC"} text={o}></TextComp> 
                        </DateWrapper>
                    }) 
                    }
                </Dates>
                <Wrapper>
                    {date && date.map((b, i)=> {
                        //console.log("b: ", b, "activitydate: ", activitydate.indexOf(b) !== "-1")
                        //backgroundColor={activitydate.indexOf(b) !== -1}
                        console.log(activitydate)
                        return <Calendar backgroundColor={activitydate.indexOf(b+"") !== -1}  number={b < 32 ?  b: ""}></Calendar>

                    })}

                </Wrapper>
                {/* <Button onPress={()=> {
                    console.log(activitydate)
                }} /> */}
                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

CalendarPage.defaultProps = {};

export default CalendarPage;
