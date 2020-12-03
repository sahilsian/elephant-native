import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components/native"
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text, Platform } from 'react-native';
import NextButton from "../../NextButton"
import Header from "../../Header"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Categories from "../../Categories";
import axios from 'axios';
import { MyContext } from "../../context";
import RadioButtons from "../../radioButtons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Button from "../../Button";

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
    margin-top: 30px;
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

const GenderWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.View`
  width: 100%;
  margin-top: 15px;
`;

const BottomLabel = styled.View`
  width: ${props=>props.width ? props.width : "100%"};
  flex-direction: row;
  justify-content: ${props=>props.spacebetween ? "space-between" : "flex-start"}
`;

const BottomWrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

const SaveContainer = styled.View`
  position: absolute;
  z-index: 9999;
  width: 55%;
  bottom: ${props=>props.save ? "20px" : "-50px"};
  justify-content: space-between;
  elevation: 25;
  flex-direction: row;

`;

const NotificationWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 30px;
`;


const SettingsPage = ({ history, match }) => {

    const [save, setSave] = useState(false)

    const context = useContext(MyContext);
    const[gender, setGender] = useState("")
    const [multiSliderValue, setMultiSliderValue] = useState([19, 45])
    const [multiSliderValue2, setMultiSliderValue2] = useState([5, 30])
    const [radio, setRadio] = useState("")

  const multiSliderValuesChange = (values) => {
    console.log(multiSliderValue)
    setMultiSliderValue(values)
  } 
  const multiSliderValuesChange2 = (values) => {
    console.log(multiSliderValue2)
    setMultiSliderValue2(values)
  } 
    useEffect(()=> {

    }, [])

    const genders = [
      "Male",
      "Female",
      "No Preference"
    ]

    const radiochoice = [
      "Enabled",
      "Disabled"
    ]

  return (
    <Container>
      <SaveContainer save={save}>
      <Button BackgroundColor={"#E1E1E1"} color={"#000"} buttonText={"Cancel"} onPress={()=> {
        setSave(false)
      }}></Button>
      <Button buttonText={"Save"}></Button>
    </SaveContainer>
        <TopNavBar onPress={()=> {
            history.push("/settings")
        }}></TopNavBar>
        <NavBar home={()=> {
            history.push("/home")
        }}
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
                    flex: 1,

                }}
                >
                
                <HeaderContainer>
                    <Header text={"Settings"} onPress={() => {

                    }}>
                    </Header>
                </HeaderContainer>
                
                <ItemContainer>

                    <CustomInput
                    DisplayIt={true}
                    Title={"Location"}
                    placeholder={"Location"}
                    ColorHighlight
                    onChange={()=> {
                      setSave(true)
                    }}
                    >

                    </CustomInput>
                    <Title>
                      <TextComp color={"#5C80BC"} fontSize={"24px"} text={"Preferred Gender"}></TextComp>
                    </Title>
                    <GenderWrapper>
                      
                      {genders.map((e, i) => {
                        return <RadioButtons
                          marginRight={"8px"}
                          width={"auto"}
                          text={e}
                          bgcolor={gender.includes(e) ? "#5C80BC" : "#AFD2E9"}
                          onPress={()=> {
                            setGender(e)
                          }}
                          
                        >
                        </RadioButtons>

                      })}
                    </GenderWrapper>
                    <Title>
                      <TextComp color={"#5C80BC"} fontSize={"24px"} text={"Preferred Age"}></TextComp>
                    </Title>
                    <MultiSlider
                    markerStyle={{
                      ...Platform.select({
                        ios: {
                          height: 30,
                          width: 30,
                          shadowColor: '#000000',
                          shadowOffset: {
                            width: 0,
                            height: 3
                          },
                          shadowRadius: 1,
                          shadowOpacity: 0.1
                        },
                        android: {
                          height: 20,
                          width: 20,
                          borderRadius: 50,
                          backgroundColor: '#EBC1AD'
                        }
                      })
                    }}
                    pressedMarkerStyle={{
                      ...Platform.select({
                        android: {
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: '#148ADC'
                        }
                      })
                    }}
                    selectedStyle={{
                      backgroundColor: '#1792E8'
                    }}
                    trackStyle={{
                      backgroundColor: '#CECECE'
                    }}
                    touchDimensions={{
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      slipDisplacement: 40
                    }}
                    values={[multiSliderValue[0], multiSliderValue[1]]}
                    sliderLength={330}
                    onValuesChange={multiSliderValuesChange}
                    min={19}
                    max={65}
                    allowOverlap={false}
                    minMarkerOverlapDistance={10}
                    ></MultiSlider>
                    <BottomWrapper>
                      <BottomLabel
                        width={"54%"}
                      >
                        <TextComp
                          text={"19"}
                          color={"#5C80BC"}
                        />
                      </BottomLabel>
                      <BottomLabel
                      spacebetween={true}
                      width={"45%"}
                      >
                        <TextComp
                          text={"45"}
                          color={"#5C80BC"}
                        />
                        <TextComp
                          text={"65"}
                          color={"#5C80BC"}
                        />
                      </BottomLabel>
                      
                    </BottomWrapper>

                    <Title>
                      <TextComp color={"#5C80BC"} fontSize={"24px"} text={"Distance"}></TextComp>
                    </Title>
                    <MultiSlider
                    markerStyle={{
                      ...Platform.select({
                        ios: {
                          height: 30,
                          width: 30,
                          shadowColor: '#000000',
                          shadowOffset: {
                            width: 0,
                            height: 3
                          },
                          shadowRadius: 1,
                          shadowOpacity: 0.1
                        },
                        android: {
                          height: 20,
                          width: 20,
                          borderRadius: 50,
                          backgroundColor: '#EBC1AD'
                        }
                      })
                    }}
                    pressedMarkerStyle={{
                      ...Platform.select({
                        android: {
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: '#148ADC'
                        }
                      })
                    }}
                    selectedStyle={{
                      backgroundColor: '#1792E8'
                    }}
                    trackStyle={{
                      backgroundColor: '#CECECE'
                    }}
                    touchDimensions={{
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      slipDisplacement: 40
                    }}
                    values={[multiSliderValue2[0], multiSliderValue2[1]]}
                    sliderLength={330}
                    onValuesChange={multiSliderValuesChange2}
                    min={5}
                    max={50}
                    allowOverlap={false}
                    minMarkerOverlapDistance={10}
                    ></MultiSlider>
                    <BottomWrapper>
                      <BottomLabel
                        width={"50%"}
                      >
                        <TextComp
                          text={"5km"}
                          color={"#5C80BC"}
                        />
                      </BottomLabel>
                      <BottomLabel
                      spacebetween={true}
                      width={"50%"}
                      >
                        <TextComp
                          text={"30km"}
                          color={"#5C80BC"}
                        />
                        <TextComp
                          text={"50km"}
                          color={"#5C80BC"}
                        />
                      </BottomLabel>
                      
                    </BottomWrapper>
                    <Title>
                      <TextComp color={"#5C80BC"} fontSize={"24px"} text={"Notifications"}></TextComp>
                    </Title>
                    <NotificationWrapper>

                    {radiochoice.map((e, i) => {
                        return <RadioButtons
                          marginRight={"8px"}
                          width={"auto"}
                          text={e}
                          mright={"20px"}
                          bgcolor={radio.includes(e) ? "#5C80BC" : "#AFD2E9"}
                          onPress={()=> {
                            setRadio(e)
                          }}
                          
                        >
                        </RadioButtons>

                      })}

                    </NotificationWrapper>
                      
                </ItemContainer>
                
            </ScrollView>
        </AdjustedWidth>

    </Container>
  );
};

SettingsPage.defaultProps = {};

export default SettingsPage;
