import styled from 'styled-components'
import { Link } from 'react-router-dom'

// styled components for container
export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    180deg,
    #Dee507 0%,
    gold 100%
);
`

/* styled components for formwrap */
export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%
}
`

// styled components for Icon
export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;
color: #000;

@media screen and (max-width: 380px) {
    margin-left: 16px;
    margin-top: 8px;
}
`
// styled components for FormComponent
export const FormComponent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`

// styled components for Form
export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`
// styled components for FormH1
export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

// styled components for FormLabel
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`

// styled components for FormInput 
export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`

// styled components for FormButton
export const FormButton = styled.button`
background: #Dee507;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #000;
font-size: 20px;
cursor: pointer;
`
// styled components for Text
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`