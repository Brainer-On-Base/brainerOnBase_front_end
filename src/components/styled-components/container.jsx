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
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
`


export const StyledInitAppContainer = styled(StyledAppContainer)`
background-color: #242424;


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
        z-index: 9999;


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

    h1 {
        font-size: 2.5em;
        line-height: 1.1;
        transition: filter 300ms;
        font-family: "Luckiest Guy", cursive;
        color: #888;

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
            color: #888;


            span{
                font-family: "Luckiest Guy", cursive;
                color: #ff437d;
                
            }
        }

    }
    img{
        width: 350px;
        position: absolute;
        bottom: 0;
        transition: filter 300ms;
        cursor: pointer;
        z-index: 9999;

        &:hover {
            filter: drop-shadow(0 0 2em #c464ffaa);
          }
    }

    .baloon{
        width: 280px;
        z-index: 99999;
        left: 0;
        // transform: scaleX(-1);
        animation: fly 5s infinite alternate;

    }

    .bubble{
        bottom: 60px !important;
        left: 320px !important;

        &:after{
            left: -8px !important;
            top: 10px !important;
            background-color: #fff;
            box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
            transform: rotate(120deg); /* Rotar el piquito */
    
        }
    }

    @media(max-width: 1300px){
        .home-text-container{
            align-items: center;

            h1{
                margin-right: 0;
            }
            button{
                margin-right: 0;
            }
    
        }
        .bubble{
            bottom: 50px !important;
            left: 220px !important;

            &:after{
                left: -8px !important;
                top: 10px !important;
                background-color: #fff;
                box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
                transform: rotate(90deg); /* Rotar el piquito */
        
            }
        }
        img{
            width: 250px;
        }
    }

    @media(max-width: 900px){
        .home-text-container{

            h1{
                font-size: 3em;
            }
    
        }
        .bubble{
            width: auto;
        }
    }

    @media(max-width: 550px){
        .home-text-container{

            h1{
                font-size: 2em;
            }

            button{
                margin-right: 0;
            }
    
        }
        .bubble{
            bottom: 20px !important;
            left: 160px !important;
            width: auto;
        }
    }


`



export const StyledHistorySection = styled('div')`
    height: 100vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;



    .img1{
        width: 250px;
        position: absolute;
        right: 50px;
        bottom: -180px;
        transition: filter 300ms;
        cursor: pointer;
        z-index: 9999;

        &:hover {
            filter: drop-shadow(0 0 2em #c464ffaa);
          }
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
    user-select: none;
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
