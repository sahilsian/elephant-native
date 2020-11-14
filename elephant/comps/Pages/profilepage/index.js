import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, StyleSheet } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
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
    width: 80%;
    flex: 1;
    alignItems: center;
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-around;
`;

const ProfilePage = ({}) => {

    const [shadow, setShadow] = useState(false)

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
