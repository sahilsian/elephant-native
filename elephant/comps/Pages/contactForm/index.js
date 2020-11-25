import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"
import axios from 'axios';
import RadioButtons from "../../radioButtons";

const Frame = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const FormWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const GenderWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

const ContactForm = ({location, history}) => {
  const [userGender, setUserGender] = useState("")
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[age, setAge] = useState()
  const[caregiverName, setCaregiverName] = useState("")
  const[caregiverLastName, setCaregiverLastName] = useState("")
  const[phonenumber, setPhonenumber] = useState("")
  const[homenumber, setHomenumber] = useState("")
  const[email, setEmail] = useState("")
  const[city, setCity] = useState("")
  const gender = [
    "Male",
    "Female",
    "Other"
  ]


  var iseducator = location.state.iseducator
  var firstname = location.state.firstname
  var disorders = location.state.disorders
  var severity = location.state.severity
  var interests = location.state.interests

  const HandleClick = async() => {

    axios.post("http://elephantidsp.herokuapp.com/user/create-student", {
      name: caregiverName,
      email: email,
      password: password,
      username: username,
      gender: userGender, 
      age: parseInt(age),
      phone_number: phonenumber,
      is_educator: iseducator, 
      student_name: firstname, 
      disability_name: disorders, 
      disability_spectrum: severity, 
      interests: interests,
    })
    .then(response => {
        console.log(response.data, 'success')
        history.push("/finishedsignup")
    })
    .catch(error => {
      console.log(error, "somethings wrong")
    });

  }

  return (
      <ScrollView style={{width: "100%", height: "100%"}}>

      <Frame>
      <FullWrapper>
      <TextWrapper>
        <TextComp fontSize={"20px"} text={"Please fill out the following with the Your information"}></TextComp>
      </TextWrapper>
        <FormWrapper>
        <CustomInput
            DisplayIt={true}
            Title={"Account"}
            placeholder={"Username"}
            onChange={(e)=> {
              setUsername(e)
            }}
          ></CustomInput>
          <CustomInput placeholder={"Password"} onChange={(e)=> {
              setPassword(e)
            }}></CustomInput>
          <CustomInput
            DisplayIt={true}
            Title={"Personal"}
            placeholder={"First Name"}
            onChange={(e)=> {
              setCaregiverName(e)
            }}
            
            
          ></CustomInput>
          
          <CustomInput placeholder={"Last Name"} onChange={(e)=> {
              setCaregiverLastName(e)
            }}></CustomInput>
            <CustomInput placeholder={"Age"} onChange={(e)=> {
              setAge(e)
            }}></CustomInput>  
          <GenderWrapper>
            {gender.map((e, i) => {
              return <RadioButtons
                marginRight={"8px"}
                width={"auto"}
                text={e}
                bgcolor={userGender.includes(e) ? "#5C80BC" : "#AFD2E9"}
                onPress={()=> {
                  setUserGender(e)
                }}
              >
              </RadioButtons>

            })}
            
          </GenderWrapper>
          <CustomInput
            Seperation={true}
            DisplayIt={true}
            Title={"Contact Information"}
            placeholder={"Phone Number"}
            MiniSeperation={true}
            TitleDisplay={true}
            SubDisplay={true}
            MiniTitle={"Phone Number"}
            subtext={"(Atleast one number is mandatory)"}
            onChange={(e)=> {
              setPhonenumber(e)
            }}
          ></CustomInput>
          <CustomInput placeholder={"Home Number (optional)"} onChange={(e)=> {
              setHomenumber(e)
            }}></CustomInput>
          <CustomInput
            MiniSeperation={true}
            Seperation={true}
            TitleDisplay={true}
            MiniTitle={"Email Address"}
            placeholder={"Email Address"}
            onChange={(e)=> {
              setEmail(e)
            }}
          ></CustomInput>
          <CustomInput
            Seperation={true}
            DisplayIt={true}
            TitleDisplay={true}
            Title={"Location"}
            MiniTitle={"What city are you based in"}
            placeholder={"City"}
            onChange={(e)=> {
              setCity(e)
            }}
          ></CustomInput>
        </FormWrapper>
        <NextButton onPress={HandleClick}></NextButton>
      </FullWrapper>
      </Frame>
      </ScrollView>


  );
};

ContactForm.defaultProps = {};

export default ContactForm;
