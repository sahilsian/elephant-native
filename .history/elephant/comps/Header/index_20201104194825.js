import React from 'react';
import styled, {css} from 'styled-components';

const HeadBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    max-width: 292px;
    max-height: 45px;
`;

const HeadTitle = styled.h1`
    font-family: Quicksand;
    font-size: 36px;
    font-weight: bold;
    line-height: 45px;
    color: ${props=>props.color ? props.color : "#000"};
    padding: 5px;
    ${props=>props.highlight === true && css`
    background-color: #F5A;
    margin: 5px;
    `}
`;

const Header = ({color, highlight}) => {
    return <HeadBox>
        <HeadTitle color={color} highlight={highlight}>Favourite People</HeadTitle>
    </HeadBox>
}

Header.defaultProps = {
    color: null,
    highlight: null
}

export default Header;