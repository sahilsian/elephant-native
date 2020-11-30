import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, Alert } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import WelcomeComp from "../../Welcome";
import BackButton from '../../BackButton'

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
  justify-content: space-between;

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
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
`;

const TextTitle = styled.View`
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

const BackWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;


const CaregiverSignup = ({history, location}) => {

  useEffect(()=> {
    console.log(location.state)

    if(location.state.firstname && location.state.lastname != "") {
      setLastname(location.state.lastname)
      setFirstname(location.state.firstname)
    }
  }, [])

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
        <Frame>
            <FullWrapper>
              
              <TitleBody>
              <BackWrapper>
                <BackButton onPress={() =>  
                  Alert.alert(
                    'Are you sure you want to continue?',
                    'Any information added will be lost.',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log("cancelled")
                      },
                      {
                        text: 'Ok',
                        onPress: () => history.push("/signup")
                      }
                    ],
                    { cancelable: true }
                  
                  )
                }

                  ></BackButton>
              </BackWrapper>
                <TextWrapper>
                    <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information."}></TextComp>
                </TextWrapper>
                <TextTitle>
                <WelcomeComp Display={true} fontSize={"32px"} main={"Lets start with the applicants name!"}></WelcomeComp>
                </TextTitle>    
                <FormWrapper>
                    <CustomInput 
                    placeholder={"First Name"}
                    onChange={firstname => {
                          setFirstname(firstname)
                      }
                    }
                    value={
                      firstname
                    }
                    >
                    </CustomInput>
                    <CustomInput 
                    placeholder={"Last Name"}
                    onChange={lastname => {
                        setLastname(lastname)
                    }
                  }
                    value={
                      lastname
                    }
                    >
                    </CustomInput>
                </FormWrapper>
              </TitleBody>

                <NextButton onPress={()=> {
                  if(firstname == "" ){
                    Alert.alert(
                      'Elephant',
                      'Please fill in all text boxes.',
                      [
                        {
                          text: 'Ok',
                          onPress: () => console.log("ok")
                        }
                      ],
                      { cancelable: true }
                    
                    )
                  } else if (lastname == ""){
                    Alert.alert(
                      'Elephant',
                      'Please fill in all text boxes.',
                      [
                        {
                          text: 'Ok',
                          onPress: () => console.log("ok")
                        }
                      ],
                      { cancelable: true }
                    
                    )
                  } else {
                    history.push("/caregiversignuptwo", {
                      firstname : firstname,
                      lastname : lastname,
                      iseducator: location.state.iseducator,
                      disorders: location.state.disorders,
                      severity: location.state.severity,
                      about: location.state.about,
                      email: location.state.email,
                      password: location.state.password,
                      username: location.state.username,
                      userGender: location.state.userGender, 
                      age: location.state.age,
                      phonenumber: location.state.phonenumber,
                      interests: location.state.interests
                    })
                  }
                  
                }}></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignup.defaultProps = {};

export default CaregiverSignup;
