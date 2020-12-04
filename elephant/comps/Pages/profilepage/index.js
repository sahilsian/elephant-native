import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, StyleSheet, Alert, Text } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import BackButton from "../../BackButton";
import Header from "../../Header";
import ProfileLogo from "../../ProfileLogo";
import Button from "../../Button";
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyContext} from '../../context'
import axios from 'axios';
import SubCategories from "../../SubCategories";
// import LinearGradient from 'react-native-linear-gradient'

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
    height: 100%;
    flex: 1;
    flexDirection: column;
    flexWrap: wrap;
    align-items: center;
`;

const Back = styled.View`
    width: 100%;
    margin-top: 10px;
`;

const Title = styled.View`
    flex-direction: row;
    align-items: center;
    height: 120px;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
`;

const RowView = styled.View`
    flex-direction: row;
    margin-bottom: ${props=>props.marginBottom ? props.marginBottom : "0px"}
`;

const Row = styled.View`
    flex: 1;
    width: 100%;
    margin-left: ${props=>props.marginLeft ? props.marginLeft : "0px"}
    margin-right: ${props=>props.marginRight ? props.marginRight : "0px"}
    align-items: ${props=>props.align ? props.align : "flex-start"};
`

const RowContainer = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: ${props=>props.justifyContent ? props.justifyContent : "flex-start"};
`;

const LookingFor = styled.View`
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Hours = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: ${props=>props.justifyContent ? props.justifyContent : "flex-start"};
`;

const AttachedFiles = styled.View`
    width: 100%;
    margin-top: 15px;
`;

const Attached = styled.View`
    width: 55%;
    flex-direction: row;
    justify-content: space-around;
    margin: 15px 15px;
`;

const AttachedWrapper = styled.View`
    width: 100%;
    align-items: center;
`;

const ImgIcon = styled.Image`
    margin-right: ${props=>props.marginright ? "20px" : "0px"}
`;

const About = styled.View`
    width: 100%;
    margin-bottom: 15px;
`;

const EducatorInfo = styled.View`
    width: 100%;
    margin-bottom: 15px;
`;

const ContactWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    margin: 15px 0px;
`;

const InterestsWrapper = styled.View`
    width: 100%;
`;

const ProfilePage = ({match, history, location}) => {


    const [shadow, setShadow] = useState(false)
    const [open, setOpen] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [interests, setInterests] = useState([])
    const [connect, setConnect] = useState([])
    // const handleClick = () => {
    //     setOpen(!open);
    // };

    const handleConnect = async() => {
        
        var Connect = {
            method: 'post',
            url: `http://elephantidsp.herokuapp.com/user/connect/${data.username}`,
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${context.token}`
            },
            data : {
                
            }
        };

        axios(Connect)

        .then(response => {
            setConnect(response.data)
            console.log(response.data, 'connect')

        })

        
    };

    
      const [data, setData] = useState([]);
      const context = useContext(MyContext);
      //setup rendering here, only one cube will be visible. When array for interests
      // in api is mapped, more items will be shown.
  
      useEffect(() => {
          console.log(location.state.ownprofile)
        if (location.state.ownprofile !== true) {

          var Profile = {
              method: 'get',
              url: `http://elephantidsp.herokuapp.com/user/findone/${match.params.user}`,
              headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${context.token}`
              }
          };  
  
          axios(Profile)
  
          .then(function (response) {
              console.log(response.data, 'profile')
              setData(response.data)
              setInterests(response.data.interests)
            

          })
          .catch(function (error) {
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
        } else {
            var Profile = {
                method: 'get',
                url: `http://elephantidsp.herokuapp.com/profile`,
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${context.token}`
                }
            };  
    
            axios(Profile)
    
            .then(function (response) {
                console.log(response.data, 'profile')
                setData(response.data)
                setInterests(response.data.interests)
              
  
            })
            .catch(function (error) {
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

          
      }, [])

      useEffect(()=> {
          console.log(location.state)
      })

      
  return (
    <Container>
        {/* <LinearGradient 
        colors={["#AFD2E9", "#FFFFFF"]}
        style={styles.linearGradient}
        > */}

        <TopNavBar></TopNavBar>
        <NavBar home={()=> {
            history.push("/home")
        }} search={()=> {
            history.push("/search/general", {
                notcategory: true
            })
        }} calendar={()=> {
            history.push("/calendarpage")
        }}
        accounticon={require('../../../assets/User.png')}
        ></NavBar>    
            <AdjustedWidth >
                <ScrollView
                    contentContainerStyle={{
                        alignItems:"center"
                    }}
                    style={{
                        width: "100%",
                    }}
                    >
                    <ItemContainer>
                        <Back>
                            {location.state.ownprofile === true
                                ?
                                <BackButton onPress={()=> {
                                    history.push(`/${location.state.page}`)
                                }}></BackButton>
                                :
                                <BackButton onPress={()=> {
                                    history.push(`/search/${location.state.subname}`, {
                                    category: location.state.category,
                                    subname: location.state.subname
                                })
                                }}></BackButton>
                            }
                            
                        </Back>
                        <Title>
                            <ProfileLogo></ProfileLogo>
                            <Header display fontweight={true} text={data.name}></Header>
                        </Title>
                        <RowContainer>
                            <Row marginRight={"10px"}>
                                <RowView >
                                    <TextComp 
                                    text={"Age: "}
                                    fontSize={"24px"} 
                                    /><TextComp 
                                    text={data.age}
                                    fontSize={"24px"} 
                                    />
                                </RowView>
                                <RowView >
                                    <TextComp 
                                    text={data.is_educator ? "Occupation" : "Location:"}
                                    fontSize={"24px"} 
                                    />
                                </RowView>
                                <RowView>
                                        <TextComp 

                                        
                                        text={data.is_educator ? "" : "In Dev"}
                                        fontSize={"24px"} 
                                        /> 
                                </RowView>
                            </Row>
                            <Row align="flex-end" marginLeft={"10px"}>
                                <RowView justifyContent={"flex-end"}>
                                    {location.state.ownprofile === true
                                    ?
                                    <Text></Text>
                                    :
                                    <Button 
                                    BackgroundColor={context.user.connected_users.includes(data.username) ? "#6C8DC3" : "#CED9EB"} 
                                    color={"#000"} 
                                    fontSize={"16px"} 
                                    marginTop={"0px"} 
                                    buttonText={context.user.connected_users.includes(data.username) ? "Connected" : "Connect"} 
                                    maxHeight={"35px"}
                                    MaxWidth={"120px"}
                                    onPress={handleConnect}
                                    >

                                    </Button>
                                    }
                                    
                                    
                                </RowView>
                            </Row>
                        </RowContainer>

                        <EducatorInfo>
                            <TextComp 
                            fontSize={"20px"}
                            color={"#5C80BC"}
                            text={`${data.name}'s Contact Info`}
                            />
                            {data.is_educator
                            
                                ?
                                <TextComp 
                                text={`Sensitive Information to know when contacting this person`}
                                color={"#4D5061"}
                                />

                                :

                                null

                            }
                        </EducatorInfo>
                        <ContactWrapper>
                            <ImgIcon marginright source={require("../../../assets/phone.png")}>
                            </ImgIcon>
                            <TextComp
                                fontSize={"20px"}
                                text={data.phone_number}
                                decoration={"underline"}
                            />
                        </ContactWrapper>
                        <ContactWrapper>
                            <ImgIcon marginright source={require("../../../assets/mail.png")}>
                            </ImgIcon>
                            <TextComp
                                fontSize={"20px"}
                                text={data.email}
                                decoration={"underline"}
                            />
                        </ContactWrapper>
                        
                        <LookingFor>
                            <TextComp 
                            fontSize={"20px"}
                            color={"#5C80BC"}
                            text={"Looking For:"}
                            />
                            <TextComp 
                            fontSize={"18px"}
                            text={"Part Time"}
                            />
                        </LookingFor>

                        <Hours>
                            <TextComp
                            fontSize={"20px"}
                            color={"#5C80BC"}
                            text={"Hours of avalability"}
                            />

                            {/* <Icon
                            name="angle-down"
                            size={24}
                            color="#900"
                            /> */}

                            {/* {open ? <Icon  
                            name={"up"}
                            onPress={setOpen(!open)}
                            /> : <Icon
                            name={"down"}
                            onPress={setOpen(!open)}
                             />} */}
                        </Hours>
                        
                        <Hours>
                            <Row marginRight={"10px"} justifyContent={"flex-end"}>
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Monday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Tuesday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Wednesday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Thursday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Friday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Saturday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"Sunday: "}
                                />
                            </Row>
                            <Row align="flex-end"  marginLeft={"10px"}>
                            <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"18px"}
                                text={"X"}
                                />
                            </Row >
                        </Hours>
                        <AttachedFiles>
                            <TextComp
                            fontSize={"20px"}
                            color={"#5C80BC"}
                            text={"Attached Files"}
                            />
                            <AttachedWrapper>
                                <Attached>
                                    <ImgIcon source={require("../../../assets/paperclip.png")}>
                                    </ImgIcon>
                                    <TextComp
                                        fontSize={"20px"}
                                        text={"AttachedFile.PDF"}
                                        decoration={"underline"}
                                />
                                </Attached>
                            </AttachedWrapper>
                        </AttachedFiles>

                        <About>
                        <TextComp
                            fontSize={"20px"}
                            color={"#5C80BC"}
                            text={"About"}
                        />

                        <TextComp
                            fontSize={"18px"}
                            text={"This is a sample text, this section is currently in development"}
                        />
                        </About>

                        <InterestsWrapper>
                            <TextComp
                                fontSize={"20px"}
                                color={"#5C80BC"}
                                text={"Interests"}
                            />
                            { interests.map((o, i)=> {
                                <SubCategories></SubCategories>
                            })}
                        </InterestsWrapper>
                    </ItemContainer>
                </ScrollView>
            </AdjustedWidth>

        {/* </LinearGradient> */}
        
    </Container>



  );
};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  }
})

ProfilePage.defaultProps = {};

export default ProfilePage;
