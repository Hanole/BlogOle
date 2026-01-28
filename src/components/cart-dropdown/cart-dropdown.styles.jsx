// $base-color: #0F2027;
// $nicebrown: #170900;
// $niceblue: #2C5364;

import styled from "styled-components";

import { BaseButton, InvertedButton, GoogleSignInButton } from '../button/button.styles'

export const CartDropdownContainer = styled.div`
    position: absolute;
    flex-direction: column;
    width: 340px;
    height: 340px;
    display: flex;
    padding: 20px;
    top: 80px;
    right: 0px;
    z-index: 5;
    border-bottom-left-radius: 8px;
    opacity: 0.95;
    box-shadow:
    rgba(74, 78, 105, 0.4) 0px 5px,
    rgba(154, 140, 152, 0.3) 0px 10px,
    rgba(201, 173, 167, 0.2) 0px 15px;
    color: black;
    background-color: rgba(74, 78, 105, 0.5);
    backdrop-filter: blur(10px);
    transition: opacity 0.3s ease-in-out;

    ${BaseButton}, 
    ${InvertedButton}, 
    ${GoogleSignInButton} {
        margin-top: auto;
    }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`




