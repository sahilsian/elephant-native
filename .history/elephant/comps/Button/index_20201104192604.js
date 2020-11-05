import React from 'react';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 128px;
    min-height: 47px;  
`;

const ButtonBox = styled.div`
    background: ${props=>props.backgroundColor ? props.backgroundColor : "#6C8DC3"};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 128px;
    min-height: 47px;  
    border-radius: 5px;
`;


const Button = ({backgroundColor}) => {
    return <ButtonContainer>
        <ButtonBox backgroundColor={backgroundColor}>
        </ButtonBox>
    </ButtonContainer>
}

Button.defaultProps = {
    bgcolor: null,
}

export default Button;