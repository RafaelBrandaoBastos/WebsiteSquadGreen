import styled from 'styled-components';

export const Main = styled.div`
    background-color: black;
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const Interface = styled.div`
    display: flex;
    background: rgb(51,56,61);
    background: linear-gradient(180deg, rgba(51,56,61,1) 0%, rgba(28,29,32,1) 100%);
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items:center; 
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const Form = styled.form`
    max-width: 379px;
    outline-style: solid;
`

export const Tittle = styled.p`
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 60px;
    line-height: 90px;
    line-height: 100%;
    margin-bottom: 20px;
`
export const Text = styled.p`
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    line-height: 100%;
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

export const Image = styled.img`
    display: flex;
    height: 937px;
    width: 1080px;
`





