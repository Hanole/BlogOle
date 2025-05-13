import styled, { keyframes } from 'styled-components';
import SvgIconPizzaCat from './../../assets/logocat';

// styles/theme.js
export const baseColor = "#0F2027";
export const niceBrown = "#170900";
export const niceBlue = "#2C5364";

export const gradientBlue = `linear-gradient(
  0deg,
  hsl(198deg 44% 11%) -1%,
  hsl(201deg 44% 14%) -2%,
  hsl(202deg 46% 17%) -1%,
  hsl(205deg 47% 21%) -1%,
  hsl(208deg 48% 24%) 0%,
  hsl(210deg 49% 28%) 1%,
  hsl(213deg 50% 31%) 3%,
  hsl(215deg 51% 35%) 4%,
  hsl(218deg 52% 38%) 6%,
  hsl(220deg 53% 42%) 8%,
  hsl(222deg 54% 45%) 11%,
  hsl(225deg 55% 48%) 13%,
  hsl(228deg 55% 52%) 16%,
  hsl(230deg 56% 55%) 20%,
  hsl(233deg 57% 59%) 23%,
  hsl(235deg 59% 62%) 27%,
  hsl(238deg 59% 65%) 32%,
  hsl(240deg 60% 69%) 37%,
  hsl(243deg 62% 72%) 43%,
  hsl(245deg 63% 76%) 49%,
  hsl(247deg 62% 79%) 56%,
  hsl(251deg 64% 83%) 64%,
  hsl(253deg 66% 86%) 74%,
  hsl(254deg 66% 90%) 85%,
  hsl(258deg 67% 93%) 100%
)`;

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  background: linear-gradient(90deg, ${niceBlue} 5%, ${niceBrown} 50%, ${baseColor} 125%);
  border-radius: 10px;

  border-top: 2px solid blueviolet;
  border-left: 2px solid blueviolet;
  border-bottom: 2px solid rgb(238, 103, 238);
  border-right: 2px solid rgb(238, 103, 238);
  box-shadow:
    rgba(240, 46, 170, 0.4) 5px 5px,
    rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  padding-left: 20px;
`;

export const Logo = styled(SvgIconPizzaCat)`
  height: 60px;
  width: auto;
  cursor: pointer;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding: 10px;
`;



export const HanoleText = styled.span`
  font-family: 'Italianno', cursive;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
`;


export const Alert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1050;
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




//     .hanoletext {
//       font-family: "Italianno", cursive;
//       font-weight: 400;
//       font-style: normal;
//       text-decoration: none;
//   }

// .navbar { 
//     height: 80px; 
//     width: 100%; 
//     display: flex; 
//     justify-content: space-between; 
//     margin-bottom: 50px; 
//     background: linear-gradient(90deg, $niceblue 5%, $nicebrown 50%, $base-color 125%);
//     border-radius: 10px;


//     border-top: 2px solid blueviolet;
//     border-left: 2px solid blueviolet;
//     border-bottom: 2px solid rgb(238, 103, 238);
//     border-right: 2px solid rgb(238, 103, 238);
//     box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
//       rgba(240, 46, 170, 0.2) 15px 15px;
    
      

//     .logo-container { 
//       // position: absolute;
//       height: 100%;
//       display: flex;
//       padding-left: 20px;
//       // background-color: red;

//         .logo {
//           height: 60px;
//           width: auto;
//           cursor: pointer;
//         }

        
//     } 

    

 
//     .nav-links-container { 
//       display: flex;
//       position: absolute;
//       right: 0;
//       padding: 10px;
        
//     }     
        
//     //     .nav-link { 
//     //         color: #95BCF9;
//     //         padding: 10px;
//     //         align-content: center;
//     //         margin: 5px;
//     //         transition: transform 0.3s ease-out;
//     //         cursor: pointer;

//     //         &:hover { 
//     //             transform: scale(1.1);
//     //         } 
//     //     }
//     }  
    
//     .alert {
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         z-index: 1050;
//       }

// ///**** shit under**//


//       .wrapper {
//         display: flex;
//         perspective: 500px;
//         transform: rotatex(10deg);
//         animation: rotateAngle 6s linear infinite;
//         margin: auto;
//         width: auto;
//         color: black;
//         letter-spacing: 0.05em;
//         text-transform: uppercase;
//        }
       
//        .button1 {
//         display: block;
//         position: relative;
//         margin: 0.5em 0.5em;
//         padding: 0.2em 1em;
//         cursor: pointer;
//         background: #FFFFFF;
//         border: none;
//         border-radius: 0.4em;
//         text-transform: uppercase;
//         font-size: 15px;
//         letter-spacing: 0.04em;
//         mix-blend-mode: color-dodge;
//         perspective: 500px;
//         transform-style: preserve-3d;
        
//        }
       
//        .button1::before, .button1::after {
//         --z: 0px;
//         position: absolute;
//         top: 0;
//         left: 0;
//         display: block;
//         content: "";
//         width: 100%;
//         height: 100%;
//         opacity: 0;
//         mix-blend-mode: inherit;
//         border-radius: inherit;
//         transform-style: preserve-3d;
//         transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
        
//        }
       
//        .button1 span {
//         mix-blend-mode: none;
//         display: block;
//        }
       
//        .button1::after {
//         background-color: #5D00FF;
//        }
       
//        .button1::before {
//         background-color: #FF1731;
//        }
       
//        .button1::hover {
//         background-color: #FFF65B;
//         transition: background 0.3s 0.1s;
//        }
       
//        .button1:hover::before {
//         --z: 0.04;
//         animation: translateWobble 2.2s ease forwards;
//        }
       
//        .button1:hover::after {
//         --z: -0.06;
//         animation: translateWobble 2.2s ease forwards;
//        }
       
//        @keyframes rotateAngle {
//         0% {
//          transform: rotateY(0deg) rotateX(10deg);
//          -webkit-animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
//          animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
//         }
       
//         25% {
//          transform: rotateY(20deg) rotateX(10deg);
//         }
       
//         50% {
//          transform: rotateY(0deg) rotateX(10deg);
//          -webkit-animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
//          animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
//         }
       
//         75% {
//          transform: rotateY(-20deg) rotateX(10deg);
//         }
       
//         100% {
//          transform: rotateY(0deg) rotateX(10deg);
//         }
//        }
       
//        @keyframes translateWobble {
//         0% {
//          opacity: 0;
//          transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
//         }
       
//         16% {
//          transform: translate3d(calc(var(--z) * 160px), calc(var(--z) * 160px), calc(var(--z) * 160px));
//         }
       
//         28% {
//          opacity: 1;
//          transform: translate3d(calc(var(--z) * 70px), calc(var(--z) * 70px), calc(var(--z) * 70px));
//         }
       
//         44% {
//          transform: translate3d(calc(var(--z) * 130px), calc(var(--z) * 130px), calc(var(--z) * 130px));
//         }
       
//         59% {
//          transform: translate3d(calc(var(--z) * 85px), calc(var(--z) * 85px), calc(var(--z) * 85px));
//         }
       
//         73% {
//          transform: translate3d(calc(var(--z) * 110px), calc(var(--z) * 110px), calc(var(--z) * 110px));
//         }
       
//         88% {
//          opacity: 1;
//          transform: translate3d(calc(var(--z) * 90px), calc(var(--z) * 90px), calc(var(--z) * 90px));
//         }
       
//         100% {
//          opacity: 1;
//          transform: translate3d(calc(var(--z) * 100px), calc(var(--z) * 100px), calc(var(--z) * 100px));
//         }
//        }