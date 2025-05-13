import styled from "styled-components";

import { ReactComponent as ShoppingCartSvg } from '../../assets/cart.svg'

export const ShoppingCartIcon = styled(ShoppingCartSvg)`
    width: 100%; 
    height: 100%; 
`

export const ShoppingCartIconContainer = styled.div`
    width: 45px; 
    height: 45px; 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer; 
    margin: 10px;
    
`

export const ItemCount = styled.span`
    position: absolute; 
    font-size: 10px; 
    font-weight: bold; 
    bottom: 16px; 
    margin-left: 2px;
`
    
