import styled from "styled-components";

export const LoginContainer = styled.div`
    // height: 800px;
    // height: 800px;
    height: 81.25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1400px;
    }


`
export const ServiceWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

// export const FormCard = styled.div`
//     display: flex;
//     flex: nowrap;
//     background: #fff;
//     align-items: center;
//     align-self: center;
//     justify-content: center;
//     border-radius: 10px;
//     // height: 600px;
//     max-width: 300px;
//     // padding: 30px;
//     box-shadow: 0 1px rgba(0,0,0,0,2);
//     transition: all 0.2s ease-in-out;
//     height: fit-content;
// `

export const FormCard = styled.div`
    background: #fff;
    align-items: center;
    border-radius: 10px;
    max-width: 300px;
    box-shadow: 0 1px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    height: fit-content;
`


export const ServicesIcon = styled.img`
    height: 60px;
    margin-bottom: 10px;
`


export const LoginH1 = styled.h1`
    float: left;
    font-size: 2.5rem;
    color: #fff;
    // margin-bottom: 64px;
    @media screen and (max-width: 2000px) {
        margin-left: 100px;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const RegisterHeader = styled.h1`
    font-size: 4rem;
    color: white
`
export const ServicesH2 = styled.h2`
    margin-top: 20px;
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 30px;
`

export const LoginBanner = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 480px){
        maxWidth: 400px;
    }
`

export const RegisterRedirect = styled.div`
  font-family: "Inter", "Rubik";
  height: fit-content;
  font-size: 64px;
`
export const LoginForm = styled.form`
  display: grid;
//   align-self: center;
`
export const UnderText = styled.small`
  font-size: 18px;
  color: white;
`

export const UserInput = styled.input`
  padding: 5px;
  border-radius: 10px;
`
export const SubmitButton = styled.input`
    border-radius: 50px;#009c5c
    background: ${({primary}) => (primary ? '#010606' : '#009c5c')};
    white-space: nowarp;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'black' : '#027143')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`
export const StyledLink = styled.a`

    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:link{
        color:#01bf71
    }
    &:focus{
        color:#01bf71
    }
    &:hover{
        color: #80dfb8
    }
    &:visited{
        color:#33CB8D
    }
    &:active{
        color:#01bf71
    }
`

export const TextUnderBanner = styled.h2`
    color: white;
    font-family: 'Inter', 'Rubik';
    font-size: 34px;
    text-align: center;
    font-weight: bold;    
    @media screen and (max-width: 480px){
        maxWidth: 400px;
        font-size: 2rem
    }
`