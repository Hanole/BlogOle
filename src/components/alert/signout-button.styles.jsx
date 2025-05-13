import { styled, keyframes } from "styled-components";

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

export const SignOutButton1 = styled.button`
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
`