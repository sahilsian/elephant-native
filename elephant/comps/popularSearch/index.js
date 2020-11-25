import React from 'react';
import styled from 'styled-components';
import TextComp from '../Text'

const Wrapper = styled.TouchableOpacity`
    borderBottomWidth: 1px;
    borderBottomColor: #5C80BC;
    width: 100%;
    height: 85px;
    justify-content: center;
`;

const PopularSearch = ({text, fontSize, onPress}) => {
    return (
        <Wrapper onPress={onPress}>
            <TextComp
                text={text}
                fontSize={fontSize}
                color={"#191716"}
            >

            </TextComp>
        </Wrapper>
    )
}

PopularSearch.defaultProps = {

}

export default PopularSearch