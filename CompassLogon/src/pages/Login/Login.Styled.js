import styled from 'styled-components';
import Notebook from "../../assets/Notebook.png"
import Logo from "../../assets/Icon.png"

export const Body = styled.div`
    background-color: black;
    display: flex;
    width: 100vw;
    height: 100vh;
`
export const Main = styled.div`
    display: flex;
    background: rgb(51,56,61);
    background: linear-gradient(180deg, rgba(51,56,61,1) 0%, rgba(28,29,32,1) 100%);
    height: 100vh;
    width: 50%;
    justify-content: center;
    align-items:center; 
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const Interface = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center; 
    outline-style: solid;
    max-width: 379px;
    @media (max-width: 768px) {
    }
`
export const Form = styled.form`
    width: 100%;
    outline-style: solid;
`
export const Text = styled.p`
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
    margin-bottom: 20px;
    margin-top: 20px;
`
export const Tittle = styled.p`
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 60px;
    line-height: 90px;
    line-height: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const Picture = styled.div`
    background-color: red;
    display: flex;
    flex-wrap: nowrap;
    width: 50%;
    height: 100%;
    @media (max-width: 768px) {
    display: none;
    }
`
export const Image = styled.div`
    background: url(${Notebook});
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
`
export const Icon = styled.div`
    margin-top: 20px;
    background: url(${Logo});
    height: 94px;
    width: 349px;
`





