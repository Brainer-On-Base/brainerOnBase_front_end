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


export const StyledXCard = styled('div')`
    border-radius: 0 !important;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    margin-top: 0;
    margin-bottom: 1.5rem;
    overflow:hidden;
`
export const StyledAppContainer = styled('div')`
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;


`


export const StyledHomeContent = styled('div')`
    text-align: center;
    font-family: "Luckiest Guy", cursive;
    margin: 0 auto;
    
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
`


export const StyledWelcomeSection = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    .home-text-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 6em;
        h1{
            font-size: 5em;
            line-height: 1.1;
            transition: filter 300ms;
            font-family: "Luckiest Guy", cursive;
            color: #888;
        }

    }
    img{
        width: 350px;
        position: absolute;
        bottom: 0;
        transition: filter 300ms;
        cursor: pointer;

        &:hover {
            filter: drop-shadow(0 0 2em #c464ffaa);
          }
    }

    


`



export const StyledTokenomicsSection = styled('div')`
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;

    h1{
        font-size: 120px;
        font-family: "Luckiest Guy", cursive;
        margin: 1em 0 0em 2em;

    }

    .pie-chart-container{
        font-family: "Luckiest Guy", cursive;
        border-radius: 8px;
        color: white !important;
    }

    .img1{
        width: 250px;
        position: absolute;
        right: 50px;
        top: 100px;
        transition: filter 300ms;
        cursor: pointer;

        &:hover {
            filter: drop-shadow(0 0 2em #c464ffaa);
          }
    }
    .img2{
        width: 250px;
        position: absolute;
        left: 20px;
        transform: scaleX(-1);
        bottom: 0px;
        transition: filter 300ms;
        cursor: pointer;
        &:hover {
            filter: drop-shadow(0 0 2em #c464ffaa);
          }
    }
`


export const StyledFooterSection = styled('div')`
    width: 80%;
    display: flex;
    height: auto;
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
    animation: appear 0.2s forwards; /* Animation for each letter */
    opacity: 0; /* Start with opacity 0 */
    p{
        margin: 0;

    }
    position: absolute;
    right: ${(position) => position?.right};
    z-index: 999999;
    top: ${(position) => position?.top};
    left: ${(position) => position?.left};
    bottom: ${(position) => position?.bottom};
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
        bottom: -8px;
        left: 90px; 
        background-color: #fff;
        box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
        // transform: rotate(35deg); /* Rotar el piquito */

    }

    span{
        font-size: 20px;
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;

    }






`