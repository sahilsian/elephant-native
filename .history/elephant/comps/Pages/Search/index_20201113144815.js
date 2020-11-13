import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NavBar from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import RadioButtons from "../../radioButtons";

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const Search = ({}) => {
    return (
        <Frame>
        <NavBar></NavBar>
        <FullWrapper>
            <TitleBody>
            <ElephantLogo></ElephantLogo>
            </TitleBody>
            <Button marginTop={"40px"} buttonText={"Start"}></Button>
            
        </FullWrapper>
        </Frame>
  
    );
  };
  
  Search.defaultProps = {};
  
  export default Search;
  