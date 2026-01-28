
import styled from 'styled-components';


export const BaseButton = styled.button`
    width: auto; 
    height: 48px;
    line-height: 3.5rem; 
    padding: 0 2rem; 
    align-items: center;
    font-size: 16px; 
    background-color: black; 
    color: white; 
    text-transform: uppercase; 
    font-weight: bolder; 
    border: none; 
    border-radius: 8px;

    cursor: pointer; 
    display: flex; 
    justify-content: center; 

    &:hover { 
        background-color: white; 
        color: black; 
        border: 1px solid black; 
    } 
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4; 
    color: white; 
    
    &:hover { 
        background-color: #357ae8; 
        border: none; 
    } 
`

export const InvertedButton = styled(BaseButton)`
    background-color: white; 
    color: black; 
    border: 1px solid black; 
    
    &:hover { 
        background-color: black; 
        color: white; 
        border: none; 
    } 
`
