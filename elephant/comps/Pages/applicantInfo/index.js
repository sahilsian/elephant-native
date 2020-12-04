import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, Alert } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import BackButton from "../../BackButton"

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 80%;
  align-items: center;

`;

const TitleBody = styled.View`
  align-items: center;
  width: 100%;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const FormWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 150px;
  align-items: center;
`;


const BackWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

const ApplicantInfo = ({history, location}) => {
  const [about, setAbout] = useState("")
  useEffect(()=> {
    console.log(location.state)
    if(location.state.about != "") {
      setAbout(location.state.about)
    }
  }, [])
  return (

        <Frame>
            <FullWrapper>
            <BackWrapper>
              <BackButton onPress={() => history.push("/caregiversignupthree", {
                firstname: location.state.firstname,
                lastname: location.state.lastname,
                disorders: location.state.disorders,
                severity: location.state.severity,
                about: about,
                iseducator: location.state.iseducator,
                email: location.state.email,
                password: location.state.password,
                username: location.state.username,
                userGender: location.state.userGender, 
                age: location.state.age,
                phonenumber: location.state.phonenumber,
                interests: location.state.interests,
                caregiverName: location.state.caregiverName,
                caregiverLastName: location.state.caregiverLastName,
                city: location.state.city

              })}></BackButton>
          </BackWrapper>
              <TitleBody>
                {location.state.iseducator
                  ?
                    <TextWrapper>
                      <TextComp fontSize={"20px"} text={"Please fill out the following with your information."}></TextComp>
                    </TextWrapper>
                  :
                    <TextWrapper>
                      <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information."}></TextComp>
                    </TextWrapper>
                }
                
                {location.state.iseducator
                
                ?
                <FormWrapper>
                  <CustomTextInput 
                  MiniTitle={"Tell us about you! "}
                  MiniSeperation={true}
                  Seperation={true}
                  TitleDisplay={true}
                  SubDisplay={true}
                  placeholder={"Tell us about who you are, what you do (Min: 6 characters)"}
                  subtext={"(The more you can tell us the better!)"}
                  onChangeText={(e)=> {
                      setAbout(e)
                  }}
                  value={about}
                  >

                  </CustomTextInput>
                </FormWrapper>

                :
                <FormWrapper>
                  <CustomTextInput 
                  MiniTitle={"Tell us about them! "}
                  MiniSeperation={true}
                  Seperation={true}
                  TitleDisplay={true}
                  SubDisplay={true}
                  placeholder={"Who are they? what are they like? (Min: 6 characters)"}
                  subtext={"(The more you can tell us the better!)"}
                  onChangeText={(e)=> {
                      setAbout(e)
                  }}
                  value={about}
                  >

                  </CustomTextInput>
                </FormWrapper>

                }
               
              </TitleBody>

                <NextButton onPress={()=> {
                  // if (about === undefined){
                  //   Alert.alert(
                  //     'Elephant',
                  //     'Please fill in all the blanks. ',
                  //     [
                  //       {
                  //         text: 'Ok',
                  //         onPress: () => console.log("ok")
                  //       }
                  //     ],
                  //     { cancelable: true }
                    
                  //   )
                  
                  // }else if(about.length < 6) {
                  //   Alert.alert(
                  //     'Elephant',
                  //     'Please type atleast more than 6 characters. ',
                  //     [
                  //       {
                  //         text: 'Ok',
                  //         onPress: () => console.log("ok")
                  //       }
                  //     ],
                  //     { cancelable: true }
                    
                  //   )
                  // } else {
                  history.push("/contactform", {
                      firstname: location.state.firstname,
                      lastname: location.state.lastname,
                      disorders: location.state.disorders,
                      severity: location.state.severity,
                      interests: location.state.interests,
                      about: about,
                      iseducator: location.state.iseducator,
                      email: location.state.email,
                      password: location.state.password,
                      username: location.state.username,
                      userGender: location.state.userGender, 
                      age: location.state.age,
                      phonenumber: location.state.phonenumber,
                      caregiverName: location.state.caregiverName,
                      caregiverLastName: location.state.caregiverLastName,
                      city: location.state.city
                  })
                // }
                }}></NextButton>
            </FullWrapper>
        </Frame>


  );
};

ApplicantInfo.defaultProps = {};

export default ApplicantInfo;
