import { Button } from "@mui/material";
import { styled } from "@mui/system";


export const StyledFlexCenterContainer = styled('div')`
    display: flex;
    align-items: center;

    width: 100%;
`

export const StyledFlexFullCenterContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%
`

export const StyledFlexBetweenContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`



export const StyledAppContainer = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
`


export const StyledInitAppContainer = styled(StyledAppContainer)`
background-color: #242424 !important;
z-index: 9999;
height: 100vh;

`


export const StyledHomeContent = styled('div')`
    text-align: center;
    font-family: "Luckiest Guy", cursive;
    margin: 0 auto;
    z-index: 99;
    .logo {
        height: 6em;
        padding: 2px;
        will-change: filter;
        transition: filter 300ms;
        border-radius: 80%;
        border: 2px solid black;
        background-color: #530354;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #c464ffaa);
      }
      
      .read-the-docs {
        margin-top: 4em;
        color: #888;
      }
      

    h1 {
        font-size: 4em;
        margin-top: -5px;
        line-height: 1.1;
        transition: filter 300ms;
      }
`


export const StyledNavbarContainer = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    z-index: 99999999999;


    img{
        width: 80px;
        margin: 2em 1em 2em 2em;
        padding: 2px;
        will-change: filter;
        transition: filter 300ms;
        border-radius: 80%;
        border: 2px solid black;
        background-color: #530354;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
          
          &:hover {
            filter: drop-shadow(0 0 2em #c464ffaa);
          }
    }

    a {
        font-size: 2.5em;
        line-height: 1.1;
        transition: all 300ms;
        font-family: "Luckiest Guy", cursive;
        color: #888;
        text-decoration: none;

        &:hover{
            color: white;
            cursor: pointer;
        }

      }

    svg{
        font-size: 24px;
        cursor: pointer;
        margin: 10px;
        transition: all 0.2s ease;
        background-color: ${({backgroundcolor}) => backgroundcolor ? backgroundcolor : 'transparent'};
        border-radius: 50%;
        &:hover{
            color: #1c93e3;
            background: white;
            
        }
    }

    @media(max-width: 450px){
        width: unset;
    }
`


export const StyledWelcomeSection = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, #230f44, #242424);
    background-size: cover;
    .home-text-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 6em;
        z-index: 9999;
        
        h1{
            font-size: 6em;
            line-height: 1.1;
            transition: filter 300ms;
            font-family: "Luckiest Guy", cursive;
            text-shadow: 0 .0377358491em 0 #000, .0125786164em .0377358491em 0 #000, .0125786164em -.0125786164em 0 #000, -.0125786164em .0125786164em 0 #000, -.0125786164em -.0125786164em;

            &:nth-of-type(1){
                margin-top: 80px;
                font-size: 150px;
                color: #ff437d;
            }
            &:nth-of-type(2){
                margin-top: -120px;
                font-size: 80px;
                color: #88;
                color: white;
            }
            &:nth-of-type(3){
                text-shadow: none;
                font-size: 80px;
                color: #888;
            }

            span{
                font-family: "Luckiest Guy", cursive;
                color: #ff437d;
                
            }
        }

        button{
            filter: drop-shadow(0 0 5em #c464ffaa);
        }

    }
    img{
        width: 350px;
        position: absolute;
        bottom: 0;
        transition: filter 300ms;
        z-index: 9999 !important;
    }


    .moon{
        top: 120px;
        right: 50px;
        animation: rotate 8s infinite alternate;
    }

    .baloon{
        width: 280px;
        z-index: 99999;
        left: 0;
        animation: fly 4s infinite alternate;
    }


    @media(max-width: 1300px){
        .home-text-container{
            align-items: center;
        }
        img{
            width: 250px;
        }
    }

    @media(max-width: 1050px){
        .moon{
            right: 40px;
            top: 200px;
            animation: rotate 8s infinite alternate;
        }

        .baloon {
            display: none;
        }
    }
    @media(max-width: 900px){
        .home-text-container{
            h1{
                &:nth-of-type(1){
                    margin-top: 80px;
                    font-size: 120px;
                    color: #ff437d;
                }
                &:nth-of-type(2){
                    margin-top: -100px;
                    font-size: 50px;
                    color: #88;
                    color: white;
                }
                &:nth-of-type(3){
                    text-shadow: none;
                    font-size: 60px;
                    color: #888;
                }
            }
        }
        .moon{
            width: 150px;
            right: 40px;
            top: 460px !important;
            animation: rotate 8s infinite alternate;
        }

    }

    @media(max-width: 650px){
        .moon{
            display: none;
        }
        .home-text-container{
            h1{
                &:nth-of-type(1){
                    margin-top: 100px;
                    font-size: 100px;
                    color: #ff437d;
                }
                &:nth-of-type(2){
                    margin-top: -80px;
                    font-size: 50px;
                    color: #88;
                    color: white;
                }
                &:nth-of-type(3){
                    text-shadow: none;
                    font-size: 30px;
                    color: #888;
                }
            }

            button{
                margin-top: 2em;
            }
        }
    }




`



export const StyledHistorySection = styled('div')`
    height: 140vh;
    display: flex;
    padding-top: 1em;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;

    .astronaut{
        width: 350px;
        animation: fly_short 3.5s infinite alternate;
        // filter: drop-shadow(0 0 2em #c464ffaa);

    }

    .path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 5s linear forwards;
      }


    h1{
        margin: 0;
        font-family: "Luckiest Guy", cursive;
        z-index: 9999;
        text-shadow: 0 .0377358491em 0 #000, .0125786164em .0377358491em 0 #000, .0125786164em -.0125786164em 0 #000, -.0125786164em .0125786164em 0 #000, -.0125786164em -.0125786164em;
        font-size: 150px;
        color: #ff437d;
        // color: #e72eff;
        // color: #888;

    }


    .img1{
        width: 250px;
        position: absolute;
        right: 50px;
        bottom: -180px;
        transition: filter 300ms;
        z-index: 9999;
        animation: fly_short 2s infinite alternate;

    }


    @media(max-width: 1350px){
        img, #bubbletokenomics{ 
            display: none !important;
        }
    }

`


export const StyledFooterSection = styled('div')`
  background-color: #242424;

    width: 100%;
    display: flex;
    height: auto;
    padding-top: 4em;
    margin-top: 2em;
    padding-bottom: 1em;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    p{
        text-align: center;
        margin: 0;
        font-size: 16px;
    }


    span{
        font-size: 20px;
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;

    }

    img{
        width: 40px;
        border-radius: 50%;     
    }

    @media(max-width: 900px){
        width: 80%;
    }
`



export const StyledBubbleDialog = styled('div')`

    p{
        margin: 0;

    }
    position: absolute;
    right: ${({position}) => position?.right};
    z-index: 999999;
    top: ${({position}) => position?.top};
    left: ${({position}) => position?.left};
    bottom: ${({position}) => position?.bottom};
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 20px;
    text-align: center;
    font-family: monospace;
    font-size: 20px;
    line-height: 1.3em;
    background-color: #fff;
    color: #000;
    padding: 12px;
    box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000, 0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000, -4px -4px #000, 4px 4px #000;
    box-sizing: border-box;
    width: ${({width}) => width ?? '200px'};
    transition: all 1s ease;

    &:after{
        position: absolute;
        z-index: 999999;
        content: "";
        height: 4px;
        width: 4px;
        bottom: ${({positionspik}) => positionspik?.bottom ?? '-8px'};
        left: ${({positionspik}) => positionspik?.left ?? '90px'};
        background-color: #fff;
        box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
        transform: ${({positionspik}) => positionspik?.rotate === 'true' ? 'rotate(150deg)' : ''}; /* Rotar el piquito */

    }

    span{
        font-size: 20px;
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;

    }






`



export const StyledTokenomicsSection = styled('div')`
    height: auto;
    margin-top: 4em;
    margin-bottom: 4em;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    overflow: hidden;
`


export const StyledCard = styled('div')`
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1.8em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    transition: border-color 0.25s;
    font-family: "Luckiest Guy", cursive;
    // border-color: #ff437d;
    width: 900px;
    align-self: flex-start;
    margin: 0em 0em 2em 4em;
    display: flex;

    img{ 
        width: 350px;
        margin: 0em 1em;
        transition: filter 300ms;
        cursor: pointer;
        &:hover {
            filter: drop-shadow(0 0 1em #c464ffaa);
          }
    }

    p{
        font-size: 0.8em !important;
        font-family: monospace;
        font-size: 490px;
        line-height: 1.3em;
    }

    span{
        font-size: 20px;
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;
    }


    &:nth-of-type(2), &:nth-of-type(4), &:nth-of-type(6) {
        align-self: flex-end;
        margin: 0em 4em 2em 0em;
    }


    @media(max-width: 1200px){
        align-self: center !important;;
        margin: 1em !important;
    }

    @media(max-width: 1000px){
        width: 80%;
        margin: 1em !important;
    }
    @media(max-width: 900px){
        img{
           display: none;
        }
    }
`
