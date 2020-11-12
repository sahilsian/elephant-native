import React from 'react';
import styled, { css } from 'styled-components';

const DividerContainer = styled.div`
    display: flex;
    align-items: center; 
    max-width: 382px;
    max-height: 16px;
`;

const DividerLine = styled.div`
    text-align: center;
    width: 208px;
    border: 1px solid #000000;
`;

const Divider = ({ title }) => {
    return <DividerContainer>
        <DividerLine></DividerLine>
    </DividerContainer>
}

Divider.defaultProps = {
   
}

export default Divider;