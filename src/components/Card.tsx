// import React from 'react';
import desertImage from './../assets/desert.svg'
import {StyledCard} from './Wrapper.tsx'
import {DesertImages} from './Imgs.tsx';
import {StyledBtn} from './Button.tsx';
import {SuperButton} from './Button.tsx';
import {Titles} from './Titles.tsx';
import {Descrip} from './Text.tsx';

export const Card = () => {
    return (
        <StyledCard>
<DesertImages src={desertImage} alt="Desert"/>
            <Title>Headline</Title>
            <Descrip>
                Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen
            </Descrip>
<StyledBtn>See more</StyledBtn>
<SuperButton>Save</SuperButton>

        </StyledCard>
    );
};

export default Card;
