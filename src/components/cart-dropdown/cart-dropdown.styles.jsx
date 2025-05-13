// $base-color: #0F2027;
// $nicebrown: #170900;
// $niceblue: #2C5364;

import styled from "styled-components";

import { BaseButton, InvertedButton, GoogleSignInButton } from '../button/button.styles'

export const CartDropdownContainer = styled.div`
    position: absolute;
    flex-direction: column;
    width: 240px;
    height: 340px;
    display: flex;
    padding: 20px;
    background: linear-gradient(90deg, var(--niceblue) -20%, var(--nicebrown) 50%, var(--base-color) 125%);
    top: 90px;
    right: 0px;
    z-index: 5;
    border-radius: 10px;
    opacity: 0.95;

    border-top: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid rgb(238, 103, 238);
    border-right: 2px solid rgb(238, 103, 238);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px;

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




