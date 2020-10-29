import React from 'react'
import styled from 'styled-components/native'

const InputWrapper = styled.View`
    width: 100%;
    height: auto;
    background-color: #EDEDED;
    padding: 15px;
    border-radius: 17px;
    box-shadow: rgba(0,0,0,0.2) 0px 8px 16px;
`;

const CInput = styled.TextInput`
    width: 100%;
    border: none;
    padding: 0px 20px;
    color: #292c42;
    font-weight: 400;
    font-size: 22px;
    &::placeholder {
        font-weight: 500;
        color: #dce0fb;
    }

    &:focus {
        outline: none;
        border: none;
    }
`;

const FullWrapper = styled.View`
    width: 100%;
`;

const InputTitle = styled.Text`
    color: #5C80BC;
`;

const CustomInput = ({}) => {

    return (
        <FullWrapper>
            <InputTitle>Title</InputTitle>
            <InputWrapper>
                    <CInput id="searchinput" type="text" placeholder={'text'} onFocus={() => {}}  onBlur={() => {}} onKeyUp={() => {}}></CInput>
            </InputWrapper>
       </FullWrapper>
    )
}


export default CustomInput;