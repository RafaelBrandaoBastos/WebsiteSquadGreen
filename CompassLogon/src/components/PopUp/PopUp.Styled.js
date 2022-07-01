import styled from 'styled-components';



export const Main = styled.div`
    width: 100%;
    display: block;
    max-width: 379px;
`
export const Main2 = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
export const Button = styled.button`
    margin-right: 10%;
    margin: none;
    border: none;
    color: white;
    background-color: red;
    background-color: #cf2e0e; 
    font-family: 'Poppins';
    border-radius: 45px;
    width: 30%;
    height: 6vh;
    color: white;
    font-style: Bold;
    font-size: 15px;
`
export const MSG = styled.label`
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    line-height: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 10px;
    @media (max-width: 340px) {
        margin-bottom: 20px; 
    }
`
export const MainText = styled.p`   
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    line-height: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 10px;
    margin-top: 10px;
`
export const TextRed = styled.label`   
    color: #cf2e0e;
` 
