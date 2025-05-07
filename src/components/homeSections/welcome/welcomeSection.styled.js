import styled from "styled-components";

export const StyledWelcomeSection = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  .home-text-container {
    margin-top: 4em;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-bottom: 6em;
    z-index: 9999;

    .minted-quantity {
      font-family: "Luckiest Guy", cursive;
      margin-left: 8px;
      font-size: 40px;
      color: #888;
      text-transform: uppercase;
    }

    h1 {
      font-size: 2em;
      line-height: 1.1;
      transition: filter 300ms;
      font-family: "Luckiest Guy", cursive;
      text-shadow: 0 0.0377358491em 0 #f8b8b8,
        0.0125786164em 0.0377358491em 0 #f8b8b8,
        0.0125786164em -0.0125786164em 0 #f8b8b8,
        -0.0125786164em 0.0125786164em 0 #f8b8b8,
        -0.0125786164em -0.0125786164em;
      &:nth-of-type(1) {
        margin-top: 80px;
        font-size: 140px;
        color: #ff437d;
      }
      &:nth-of-type(2) {
        margin-top: -120px;
        font-size: 60px;
        color: #888;
        color: white;
        text-shadow: none;

        &::before {
          content: "";
          display: inline-block;
          width: 50px; /* Ajusta el tamaño según el logo */
          height: 50px;
          background-image: url("./baseLogo.png"); /* Cambia por la ruta de tu logo */
          background-size: contain;
          background-repeat: no-repeat;
          margin-right: 2px; /* Espacio entre el logo y el texto */
          vertical-align: middle; /* Alinea verticalmente con el texto */
        }
      }
      &:nth-of-type(3) {
        text-shadow: none;
        font-size: 60px;
        color: #888;
      }

      span {
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;
      }
    }

    .welcome-actions {
      button {
        &:first-of-type {
          margin-right: 10px;
        }
        filter: drop-shadow(0 0 5em #c464ffaa);
      }
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  img {
    width: 400px;
    transition: filter 300ms;
    z-index: 9999 !important;
    animation: rotate 8s infinite alternate;
  }

  @media (max-width: 1300px) {
    .home-text-container {
      align-items: center;
    }
  }

  @media (max-width: 1050px) {
    .home-text-container {
      margin-top: 4em;
      text-align: center;
      flex-direction: column;
    }
    .moon {
      margin-top: 1em;
      animation: rotate 8s infinite alternate;
    }
  }

  @media (max-width: 900px) {
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 80px;
          font-size: 120px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -100px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 60px;
          color: #888;
        }
      }
    }
    .moon {
      width: 300px;
      animation: rotate 8s infinite alternate;
    }
  }

  @media (max-width: 650px) {
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 100px;
          font-size: 100px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -80px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 30px;
          color: #888;
        }
      }

      button {
        margin-top: 2em;
      }
    }
  }

  @media (max-width: 415px) {
    button .welcome-actions {
      width: 100% !important;
    }
    .minted-quantity {
      display: none;
    }
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 60px;
          font-size: 80px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -60px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 30px;
          color: #888;
        }
      }
    }
  }
`;
