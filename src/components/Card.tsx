// import React from 'react';
import desertImage from './../assets/desert.svg'
import {StyledCard} from './Wrapper.tsx'
import {DesertImages} from "./Imgs.tsx";


export const Card = () => {
    return (
        <StyledCard>
<DesertImages src={desertImage} alt="Desert"/>
        </StyledCard>
    );
};

export default Card;
