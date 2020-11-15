import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, StyleSheet } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import BackButton from "../../BackButton";
import Header from "../../Header";
import ProfileLogo from "../../ProfileLogo";
import Button from "../../Button";
import Icon from 'react-native-vector-icons/FontAwesome';

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
    flex: 0.81;
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
    margin-bottom: 15px;
`;

const Attached = styled.View`
    width: 55%;
    flex-direction: row;
    justify-content: space-around;
    margin: 15px;
`;

const AttachedWrapper = styled.View`
    width: 100%;
    align-items: center;
`;

const Paperclip = styled.Image`

`;

const About = styled.View`

`;

const ProfilePage = ({}) => {

    const [shadow, setShadow] = useState(false)
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };

  return (
    <Container>
        {/* <LinearGradient 
        colors={["#AFD2E9", "#FFFFFF"]}
        style={styles.linearGradient}
        > */}

            <TopNavBar Shadow={shadow}></TopNavBar>
            <NavBar></NavBar>   

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
                            <BackButton></BackButton>
                        </Back>
                        <Title>
                            <ProfileLogo></ProfileLogo>
                            <Header fontweight={true} text={"John Doe"}></Header>
                        </Title>
                        <RowContainer>
                            <Row marginRight={"10px"}>
                                <RowView >
                                    <TextComp 
                                    text={"Age: "}
                                    fontSize={"24px"} 
                                    /><TextComp 
                                    text={"20"}
                                    fontSize={"24px"} 
                                    />
                                </RowView>
                                <RowView >
                                    <TextComp 
                                    text={"Student At: "}
                                    fontSize={"24px"} 
                                    />
                                </RowView>
                                <RowView>
                                        <TextComp 
                                        text={"BCIT"}
                                        fontSize={"24px"} 
                                        /> 
                                </RowView>
                            </Row>
                            <Row align="flex-end" marginLeft={"10px"}>
                                <RowView justifyContent={"flex-end"}>
                                    <Button BackgroundColor={"#CED9EB"} color={"#000"} fontSize={"16px"} marginTop={"0px"} buttonText={"Connect"} maxHeight={"35px"} MaxWidth={"120px"}></Button>
                                </RowView>
                            </Row>
                        </RowContainer>
                        
                        <LookingFor>
                            <TextComp 
                            fontSize={"20px"}
                            color={"#5C80BC"}
                            text={"Looking For:"}
                            />
                            <TextComp 
                            fontSize={"20px"}
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
                                fontSize={"20px"}
                                text={"Monday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"Tuesday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"Wednesday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"Thursday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"Friday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"Saturday: "}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"Sunday: "}
                                />
                            </Row>
                            <Row align="flex-end"  marginLeft={"10px"}>
                            <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
                                text={"X"}
                                />
                                <TextComp
                                Margin={"3px"}
                                fontSize={"20px"}
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
                                    <Paperclip source={require("../../../assets/paperclip.png")}>
                                    </Paperclip>
                                    <TextComp
                                        fontSize={"20px"}
                                        text={"Attached File"}
                                        decoration={"underline"}
                                />
                                </Attached>
                            </AttachedWrapper>
                        </AttachedFiles>

                        <About>
                            
                        </About>
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
