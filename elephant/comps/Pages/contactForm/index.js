import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, Alert } from 'react-native';
import NextButton from "../../NextButton"
import axios from 'axios';
import RadioButtons from "../../radioButtons";
import BackButton from "../../BackButton"

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


const BackWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

const ContactForm = ({location, history}) => {
  const[userGender, setUserGender] = useState("")
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[age, setAge] = useState()
  const[caregiverName, setCaregiverName] = useState("")
  const[caregiverLastName, setCaregiverLastName] = useState("")
  const[phonenumber, setPhonenumber] = useState("")
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
  var severity = Math.ceil(location.state.severity)
  var interests = location.state.interests
  var description = location.state.about

  const HandleClick = async(caregiverName,
    email,
    password,
    username,
    userGender, 
    age,
    phonenumber,
    iseducator, 
    firstname, 
    disorders, 
    severity, 
    interests
    ) => {
    
``
    var data = JSON.stringify({"name": caregiverName, "email": email, "password": password, "username": username, "gender": userGender, "description": description, "age": parseInt(age), "phone_number": phonenumber, "is_educator": iseducator,"student_name": firstname,"disability_name": disorders,"disability_spectrum": parseInt(severity),"interests": interests})

    var Connect = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      data: data
    };

    console.log(data)
    axios("http://elephantidsp.herokuapp.com/user/create-student", Connect)
    .then(response => {
        console.log(response.data, 'success')
        history.push("/finishedsignup", {
          username: username,
          password: password
        })
    })
    .catch(error => {
      Alert.alert(
        'Elephant',
        error.message,
        [
          {
            text: 'Okay',
            onPress: () => console.log('Ok Pressed')
          }
        ],
        { cancelable: false }
      );
    });
    

  }

  const HandleEducatorClick = async(caregiverName,
    email,
    password,
    username,
    userGender,
    description,
    age,
    phonenumber,
    iseducator,
    interests) => {
    

    var data = JSON.stringify({"name": caregiverName, "email": email, "password": password, "username": username, "gender": userGender, "description": description, "age": parseInt(age), "phone_number": phonenumber, "is_educator": iseducator, "is_verified": true, "educator_rating": 3, "interests": interests})

    var Connect = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      data: data
    };

    axios("http://elephantidsp.herokuapp.com/user/create-educator", Connect)
    .then(response => {
        console.log(response.data, 'success')
        history.push("/finishedsignup", {
          username: username,
          password: password
        })
    })
    .catch(error => {
      console.log(error.message)
      Alert.alert(
        'Elephant',
        error.message,
        [
          {
            text: 'Okay',
            onPress: () => console.log('Ok Pressed')
          }
        ],
        { cancelable: false }
      );
    });
    

  }

  useEffect(()=> {
    console.log(JSON.stringify({"name": caregiverName, "email": email, "password": password, "username": username, "gender": userGender, "description": description, "age": parseInt(age), "phone_number": phonenumber, "is_educator": iseducator,"student_name": firstname,"disability_name": disorders,"disability_spectrum": parseInt(severity),"interests": interests}))
  })

  // useEffect(()=> {
  //   console.log(location.state)

  //   if(location.state.username != "") {
  //     setUsername(location.state.username)
  //   }
  //   if(location.state.password != "") {
  //     setPassword(location.state.password)
  //   }
  //   if(location.state.caregiverName != "") {
  //     setCaregiverName(location.state.caregiverName)
  //   }
  //   if(location.state.caregiverLastName != "") {
  //     setCaregiverLastName(location.state.caregiverLastName)
  //   }
  //   if(location.state.age != "") {
  //     setAge(location.state.age)
  //   }
  //   if(location.state.userGender != undefined) {
  //     setUserGender(location.state.userGender)
  //   }
  //   if(location.state.phonenumber != "") {
  //     setPhonenumber(location.state.phonenumber)
  //   }
  //   if(location.state.email != "") {
  //     setEmail(location.state.email)
  //   }

  // }, [])


  return (
      <ScrollView style={{width: "100%", height: "100%"}}>

      <Frame>
      <FullWrapper>
        <BackWrapper>
          <BackButton onPress={() => history.push("/applicantinfo", {
            firstname: location.state.firstname,
            lastname: location.state.lastname,
            disorders: location.state.disorders,
            severity: location.state.severity,
            iseducator: location.state.iseducator,
            email: email,
            password: password,
            username: username,
            userGender: userGender, 
            age: age,
            phonenumber: phonenumber,
            interests: location.state.interests,
            about: location.state.about,
            caregiverName: caregiverName,
            caregiverLastName: caregiverLastName,
            city: city

          })}></BackButton>
        </BackWrapper>
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
            value={username}
          ></CustomInput>
          <CustomInput smalldisplay={true} small={"Minimum of 3 Characters"} password={true} placeholder={"Password"} onChange={(e)=> {
              setPassword(e)
            }}
            value={password}></CustomInput>
          <CustomInput
            DisplayIt={true}
            Title={"Personal"}
            placeholder={"First Name"}
            onChange={(e)=> {
              setCaregiverName(e)
            }}
            value={caregiverName}
            
            
          ></CustomInput>
          
          <CustomInput placeholder={"Last Name"} onChange={(e)=> {
              setCaregiverLastName(e)
            }}
            value={caregiverLastName}></CustomInput>
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
        <NextButton onPress={()=> {
            if (caregiverName === "" || email === "" || password === "" || username === "" || userGender === "" || age === "" || phonenumber === "" || iseducator === "" || firstname === "" || disorders === "" || severity === "" || interests === "") {
              Alert.alert(
                'Elephant',
                'Please fill in all appropriate blanks.',
               [
                  {
                   text: 'Ok',
                    onPress: () => console.log("ok")
                  }
                ],
                { cancelable: true }
            
              )
            } else if(password.length <= 3) {
              Alert.alert(
                'Elephant',
                'Password must be more than 3 characters',
                [
                  {
                    text: 'Ok',
                    onPress: () => console.log("ok")
                  }
                ],
                { cancelable: true }
            
              )
            } else {
          
          if (location.state.iseducator == "false" ) {
            console.log("Hello does this work")
            HandleClick(caregiverName, email, password, username, userGender, age, phonenumber, iseducator, firstname, disorders, severity, interests)
          } else {
            console.log("work plz")
            HandleEducatorClick(caregiverName, email, password, username, userGender, description, age, phonenumber, iseducator, interests)
          }
           }
        }}
          
          ></NextButton>
      </FullWrapper>
      </Frame>
      </ScrollView>


  );
};

ContactForm.defaultProps = {};

export default ContactForm;
