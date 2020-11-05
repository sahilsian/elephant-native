import React from 'react';
import style from 'styled-components';

const ConnectContainer = style.div`
    background-color: #CED9EB;
    display: flex;
    align-items: center;
    max-width: 78px;
    min-height: 33px;
    border-radius: 5px;
`;

const ConnectTtitle = style.div`
    text-align: center;
    justify-content:center;
    margin: auto;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #000000;
`;

const ConnectButton = ({text}) => {
    return <ConnectContainer>
        <ConnectTtitle>{text}</ConnectTtitle>
    </ConnectContainer>
}

ConnectButton.defaultProps = {
    text: "Connect",
}

export default ConnectButton;