import { ScrollView, View, TextInput, Text } from 'react-native';
import NavBar from 'react-native';
import TextComp from "../../Text"
import CustomInput from "../../CustomInput";
import CustomTextInput from "../../CustomTextInput"

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
  justify-content: space-between;

`;

const Search = ({}) => {
    return ( <View style={{padding: 10}}>
        <Frame>
        <NavBar></NavBar>
        <FullWrapper>
            <TextInput
              style={{height: 40}}
              placeholder="Search for other services"
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            {/* <TextComp>Nothing here yet</TextComp> */}
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '').join(' ')}
            </Text>
        </FullWrapper>
        </Frame>
      </View> 
    );
  };
  
  Search.defaultProps = {};
  
  export default Search;
  