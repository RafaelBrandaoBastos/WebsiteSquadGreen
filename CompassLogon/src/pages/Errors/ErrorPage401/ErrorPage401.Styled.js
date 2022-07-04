import styled from "styled-components";
import { Displayed404, Section404 } from "../ErrorPage404/ErrorPage404.Styled";

export const Container401 = styled.div`
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
vertical-align: baseline;
`;


export const Section401 = styled(Section404)`
background: linear-gradient(112deg, rgba(250,250,250,1) 0%, rgba(246,246,246,1) 95%);
align-items: center; 
flex-direction:column;
p{
color: black;
font-family: 'Poppins';
font-style: bold;
font-size: 20px;
}
`;

export const Displayed401 = styled(Displayed404)`
max-width: 314px;
height:348px;
@media (max-width: 870px) {
max-width: 100vw;
max-height: 100vh;
    }
`;

