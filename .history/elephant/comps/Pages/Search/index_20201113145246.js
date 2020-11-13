import { ScrollView } from 'react-native';
import NavBar from 'react-native';
import TextComp from "../../Text"
import CustomInput from "../../CustomInput";
import CustomTextInput from "../../CustomTextInput"
import RadioButtons from "../../radioButtons";

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const 

const Search = ({}) => {
    return (
        <Frame>
        <NavBar></NavBar>
        <FullWrapper>
            <CustomTextInput></CustomTextInput>
            <TextComp>Nothing here yet</TextComp>
        </FullWrapper>
        </Frame>
  
    );
  };
  
  Search.defaultProps = {};
  
  export default Search;
  