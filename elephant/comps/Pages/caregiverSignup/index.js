import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
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


const CaregiverSignup = ({history}) => {

  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);

  return (
        <Frame>
            <FullWrapper>
              
              <TitleBody>
              <BackWrapper>
                <BackButton onPress={() => history.push("/signup")}></BackButton>
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
                    onChange={firstname => setFirstname(firstname)}
                    >
                    </CustomInput>
                    <CustomInput 
                    placeholder={"Last Name"}
                    onChange={lastname => setLastname(lastname)}
                    >
                    </CustomInput>
                </FormWrapper>
              </TitleBody>

                <NextButton onPress={()=> {
                  if(firstname == null) {

                  } else if (lastname == null){
                    
                  } else {
                    history.push("/caregiversignuptwo", {
                      firstname : firstname,
                      lastname : lastname
                    })
                  }
                  
                }}></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignup.defaultProps = {};

export default CaregiverSignup;
