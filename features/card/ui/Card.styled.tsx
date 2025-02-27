import styled from "styled-components";
import bgImg from "shared/images/desert.svg";


export const CardBox = styled.div`

height: 350px;
width: 300px;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    background-color: #958181;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    
`

export const CardImage = styled.div`
width: 280px;
height: 170px;
background-image: url(${bgImg});
border-radius: 10px;
    
`

export const CardTitle = styled.h2`
`