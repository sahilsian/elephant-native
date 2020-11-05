import React from 'react';
import style from 'styled-components';

const ButtonConnectedContainer = style.div`
    background-color: #6C8DC3;
    display: flex;
    align-items: center;
    max-width: 128px;
    min-height: 47px;
    border-radius: 5px;
`;

const ButtonConnectedTitle = style.div`
    text-align: center;
    justify-content:center;
    margin: auto;
    font-size: 22px;
    line-height: 25.78px;
    letter-spacing: 0.03em;
    color: #ffffff;
`;

const ButtonConnected = ({text}) => {
    return <ButtonConnectedContainer>
        <ButtonConnectedTitle>{text}</ButtonConnectedTitle>
    </ButtonConnectedContainer>
}

ButtonConnected.defaultProps = {
    text: "Connected",
}

export default ButtonConnected;