import { HBox } from "../../../HocComponents";
import styled from "styled-components";

export const StyledHistorySection = styled(HBox)`
  min-height: 100vh;
  height: 100%;
  align-items: flex-start;
  .astronaut {
    filter: drop-shadow(0 0 5em #c464ffaa);
    position: absolute;
    left: 50px;
    top: 40%;
    width: 300px;
    animation: fly_short 3.5s infinite alternate, fadeInUp 0.2s;
  }

  p {
    font-size: 25px;
    font-weight: 100;
    font-weight: 600;
  }

  .firstText {
    margin-left: 10em;
    margin-top: 4em;
    width: 1000px;
    font-weight: 100;
  }

  @media (max-width: 1400px) {
    #bubbletokenomics {
      left: 180px;
      width: 60%;
      p {
        font-size: 20px !important;
      }
    }
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    .astronaut {
      position: relative;
      left: 0;
    }
    #bubbletokenomics {
      position: relative;
      left: 0;
      margin: 0;
      margin: 2em 0;
      width: 80%;
      height: auto !important;
    }
  }

  @media (max-width: 900px) {
    .subtitle {
      font-size: 20px;
      margin-top: 0;
      text-align: center;
    }
  }
`;
