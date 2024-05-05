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
    }
    // .bottom-image-container{
    //     display: flex;
    //     justify-content:space-between;
    //     width: 100%;
    //     img{
    //         width: 350px;
    //     }
        
    // }


`