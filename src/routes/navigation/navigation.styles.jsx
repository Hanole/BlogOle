import styled, { keyframes } from 'styled-components';
import Alert from 'react-bootstrap/Alert';

// styles/theme.js
export const baseColor = "#0F2027";
export const niceBrown = "#170900";
export const niceBlue = "#2C5364";

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #22223B;
  position: fixed;
  z-index: 999;
  box-shadow:
    rgba(74, 78, 105, 0.4) 0px 5px,
    rgba(154, 140, 152, 0.3) 5px 10px,
    rgba(201, 173, 167, 0.2) 10px 15px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  text-decoration: none;
  padding: 1rem 2rem;
`;

export const Logo = styled.h2`
  cursor: pointer;
  color: white;
  font-family: "Lexend Zetta", sans-serif;
  text-decoration: underline white;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  right: 0;
  margin: auto 2rem;
  gap: 1rem;
  
`;



export const HanoleText = styled.span`
  font-family: 'Italianno', cursive;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
`;


export const StyledAlert = styled(Alert)`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 2rem;
  top: 1rem;
  z-index: 999999999999;
`;

// Navbar animation
export const rotateAngle = keyframes`
  0% { transform: rotateY(0deg) rotateX(10deg); }
  25% { transform: rotateY(20deg) rotateX(10deg); }
  50% { transform: rotateY(0deg) rotateX(10deg); }
  75% { transform: rotateY(-20deg) rotateX(10deg); }
  100% { transform: rotateY(0deg) rotateX(10deg); }
`;

// Glow-pulse wobble (approximation of "translateWobble" effect)
export const translateWobble = keyframes`
  0%   { transform: translate3d(0, 0, 0); opacity: 0; }
  25%  { transform: translate3d(10px, -10px, 10px); opacity: 0.5; }
  50%  { transform: translate3d(-10px, 10px, 5px); opacity: 1; }
  75%  { transform: translate3d(8px, -8px, 3px); opacity: 1; }
  100% { transform: translate3d(0, 0, 0); opacity: 1; }
`;

export const Wrapper = styled.div`
  display: flex;
  perspective: 500px;
  transform: rotateX(10deg);
  animation: ${rotateAngle} 6s linear infinite;
  margin: auto;
  color: black;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Button1 = styled.button`
  display: block;
  position: relative;
  margin: 0.5em;
  padding: 0.2em 1em;
  cursor: pointer;
  background: #ffffff;
  border: none;
  border-radius: 0.4em;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 0.04em;
  mix-blend-mode: color-dodge;
  perspective: 500px;
  transform-style: preserve-3d;
  color: black;
  text-decoration: none;

  span {
    mix-blend-mode: none;
    display: block;
  }

  &::before,
  &::after {
    --z: 0px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    mix-blend-mode: inherit;
    border-radius: inherit;
    transform-style: preserve-3d;
  }

  &::before {
    background-color: #ff1731;
  }

  &::after {
    background-color: #5d00ff;
  }

  &:hover {
    background-color: #fff65b;
    transition: background 0.3s 0.1s;

    &::before {
      --z: 0.04;
      animation: ${translateWobble} 2.2s ease forwards;
    }

    &::after {
      --z: -0.06;
      animation: ${translateWobble} 2.2s ease forwards;
    }
  }
`;