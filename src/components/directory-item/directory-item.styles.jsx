import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%; 
    height: 100%; 
    background-size: cover; 
    background-position: center; 
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    background-image: ${({imageUrl}) => `url(${imageUrl})`};

`

export const Body = styled.div`
    height: 4rem; 
    padding: 0 25px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;  
    background-color: white; 
    opacity: 0.7; 
    position: absolute; 
    border-radius: 8px;
    
    h2 { 
        font-weight: bold; 
        margin: 0 6px 0; 
        font-size: 22px; 
        color: #000; 
        
    } 

    p { 
        font-weight: lighter; 
        font-size: 16px; 
    } 

    a {
        text-decoration: none;
    }
`

export const DirectoryItemContainer = styled.div`
    width: 20%; 
    min-width: 300px;
    height: 260px; 
    flex: 1 1 auto; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    margin: 0 1rem 2rem; 
    overflow: hidden; 
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    
    &:hover { 
        cursor: pointer;

        & ${BackgroundImage} { 
            transform: scale(1.1);  
        }

        & ${Body} { 
        opacity: 0.9; 
        } 
    } 
    &.large { 
        height: 380px; 
        } 
    /* &:first-child { 
        margin-right: 8px; 
    } 
    &:last-child { 
        margin-left: 8px; 
    }  */
`


