import styled from "styled-components";
import Icon from "../../assets/Vector.svg";
import Vector from "../../assets/icon-password.svg";

export const InputUser = styled.input`
width: 95%;
height: 5.5vh;
background: #26292C;
border: 1px solid #FFFFFF;
border-radius: 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #E0E0E0;
padding-left: 4%;
background-image: url(${Icon});
background-repeat: no-repeat;
background-position: 20.8em;
background-size: contain;
margin-top: 5%;

@media (max-width: 768px) {
    background-position: 100%;      
}

&::placeholder {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #E0E0E0;
}
`;

export const Label = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
color: #E0E0E0;
`;

export const InputPassword = styled(InputUser)`
background-image: url(${Vector});
`;

export const InputError = styled(InputUser)`
border: 1px solid #E9B425;
`;