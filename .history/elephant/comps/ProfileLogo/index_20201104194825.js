import React from 'react';
import styled from 'styled-components';

const ProfileImg = styled.img`
    width: 147px;
    height: 147px;
`;

const ProfileLogo = () => {
    return <div>
        <ProfileImg src="/ProfileLogo.png"></ProfileImg>
    </div>
}

ProfileLogo.defaultProps = {
}

export default ProfileLogo;