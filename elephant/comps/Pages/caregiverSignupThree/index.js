import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, Alert } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import WelcomeComp from "../../Welcome";
import RadioButtons from "../../radioButtons";
import Slider from "../../slider";
import style from "../../../storybook/stories/CenterView/style";
import BackButton from "../../BackButton"
import Interests from "../../Interests"

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 90%;
  align-items: center;

`;

const TitleBody = styled.View`
  align-items: center;
  width: 100%;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const FormWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  margin-bottom: 30px;
`;

const BackWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;


const InterestWrapper = styled.View`
    background-color: #F5F5F5;
    width: 90%;
    height: 50%;
    margin-bottom: 15px;
    border-radius: 10px;
`;

const InterestSection = styled.View`
  width: 90%;
  margin-top: 10px;
  display: flex;
`;

const MainInterests = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 15px;
  flex-wrap: wrap;
`;


const CaregiverSignupThree = ({location, history}) => {
  const [severity, setSeverity] = useState(0)
  const [interest, setInterest] = useState([])
  const [pressed, setPressed] = useState(false)
  // const handlePress = e => {

  // }

  const InterestsArray = [
    "Photography",
    "Social Skills",
    "Speech and Language",
    "Drawing",
    "Video Games",
    "Painting",
    "Soccer",
    "Math"
]

useEffect(()=> {
  console.log(interest)
  console.log(location.state)
  if(location.state.interests !== undefined) {
    setInterest(location.state.interests)
    console.log("yes")
  }
}, [])


  return (

        <Frame>
            <FullWrapper>
              <BackWrapper>
                <BackButton onPress={() => history.push("/caregiversignuptwo", {
                  firstname: location.state.firstname,
                  lastname: location.state.lastname,
                  disorders: location.state.disorders,
                  severity: location.state.severity,
                  iseducator: location.state.iseducator,
                  about: location.state.about,
                  email: location.state.email,
                  password: location.state.password,
                  username: location.state.username,
                  userGender: location.state.userGender, 
                  age: location.state.age,
                  phonenumber: location.state.phonenumber,
                  interests: interest
                })}></BackButton>
              </BackWrapper>
              <TitleBody>
                <TextWrapper>
                    <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information."}></TextComp>
                </TextWrapper>
                <FormWrapper>
                <TextComp  weight={"bold"} fontSize={"20px"} text={"What are their Interests?"}></TextComp>
                <TextComp fontSize={"20px"} color={"#B1B1B1"} text={"Select from popular categories below."}></TextComp>   
                </FormWrapper>
              </TitleBody>
                <InterestWrapper>
                  <ScrollView contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: "center",
                  }}>
                    {/* "#5C80BC" : "#AFD2E9" */}
                    <InterestSection>
                      <TextComp weight={"bold"} fontSize={"20px"} text={"Popular Interests"}></TextComp>
                      <MainInterests>
                        {InterestsArray.map((e, i)=> {
                          return <Interests
                            bgColor={interest.includes(e) ? "#5C80BC" : "#AFD2E9"}
                            color={interest.includes(e) ? "#fff" : "#000"}
                            text={e}
                            onPress={()=> {
                              setInterest((interest) => interest.includes(e) ? interest.filter(item => item !== e) : [...interest, e])
                            }}
                          >
                          </Interests>
                        })}
                      </MainInterests>
                    </InterestSection>
                    {/* <InterestSection>
                      <TextComp weight={"bold"} fontSize={"20px"} text={"Add an Interest"}></TextComp>
                      <MainInterests>
                        
                      </MainInterests>
                    </InterestSection> */}

                  </ScrollView>
                </InterestWrapper>
              
                <NextButton onPress={()=> {
                  if(interest.length < 1) {
                    Alert.alert(
                      'Elephant',
                      'Please select atleast one interest.',
                      [
                        {
                          text: 'Ok',
                          onPress: () => console.log("ok")
                        }
                      ],
                      { cancelable: true }
                    
                    )
                  } else {
                  history.push("/applicantinfo", {
                      firstname: location.state.firstname,
                      lastname: location.state.lastname,
                      disorders: location.state.disorders,
                      severity: location.state.severity,
                      iseducator: location.state.iseducator,
                      about: location.state.about,
                      email: location.state.email,
                      password: location.state.password,
                      username: location.state.username,
                      userGender: location.state.userGender, 
                      age: location.state.age,
                      phonenumber: location.state.phonenumber,
                      interests: interest
                  })
                }
                }}></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignupThree.defaultProps = {};

export default CaregiverSignupThree;
