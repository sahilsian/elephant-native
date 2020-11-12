// import React from 'react';
// import styled, { css } from 'styled-components';

// const MessageContainer = style.div`
//     display:flex;
//     flex-direction:column;
//     width: auto;
// `;

// const MessageBox = styled.div`
//     background: ${props=>props.backgroundColor ? props.backgroundColor : "#3D6FF1"};
//     width: 255px;
//     height: 50px;
//     background: #5C80BC;
//     border-radius: 5px;
//     margin-top: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Message = ({backgroundColor}) => {
//     return <MessageContainer >
//        <MessageBox backgroundColor={backgroundColor}>
//         </MessageBox>
//     </MessageContainer>
// }

// Message.defaultProps = {
//     bgcolor: '#5C80BC'
// }

// export default Message;


import React from 'react';
import styled, { css } from 'styled-components';

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 300px;
    min-height: 100px;  
`;

const MessageBox = styled.div`
    background: ${props=>props.backgroundColor ? props.backgroundColor : "#3D6FF1"};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 255px;
    height: 50px;
    border-radius: 5px;
    margin-top: 10px;
`;


const Message = ({backgroundColor}) => {
    return <MessageContainer>
        <MessageBox backgroundColor={backgroundColor}>
        </MessageBox>
    </MessageContainer>
}

Message.defaultProps = {
    bgcolor: null,
}

export default Message;
