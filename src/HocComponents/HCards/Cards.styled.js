import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || "800px"};
  width: 100%;
  height: ${({ height }) => height || "160px"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.shadePurpleLight};
  border-radius: 25px;

  h1 {
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme.shadePurpleLight};
    font-weight: var(--weight-bold);
    color: ${({ theme }) => theme.purpleMedium};
    font-size: var(--h3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .actions {
    height: 100%;
    padding: 1.5em;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid ${({ theme }) => theme.purpleMedium};
  }
`;

export const CardImage = styled.div`
  height: 100%;
  width: 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.shadePurpleDark};
  border-radius: 25px 0px 0px 25px;
  img {
    position: absolute;
    width: 124px;
    height: 124px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.goldColor};
  }

  .portrait {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 1;
    z-index: 999;
  }
`;

export const CardProductInformation = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 10px;
  margin: 0px 20px;
  max-width: 400px;
  text-align: center;
  padding-bottom: 10px;
  position: relative;
  h3 {
    font-size: var(--h5);
    color: ${({ theme }) => theme.purpleMedium};
    font-weight: var(--weight-bold);
    align-self: center;
  }
  p {
    font-size: var(--p14);
    color: ${({ theme }) => theme.purpleMedium};
    font-weight: var(--weight-bold);
  }
  .extraInfo {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    gap: 25px;
    margin-top: 10px;
    p {
      text-align: center;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
    .color {
      div {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid white;
      }
    }
    .size {
      div {
        background: ${({ theme }) => theme.shadePurpleDark};
        color: ${({ theme }) => theme.purpleLight};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--p14);
      }
    }
    .price {
      position: absolute;
      bottom: 30px;
      right: 10px;
    }
  }
`;

export const CardProductActions = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.purpleMedium};
  font-weight: var(--weight-bold);
  label {
    font-size: var(--h6);
  }
  select {
    background: ${({ theme }) => theme.shadePurpleDark};
    color: ${({ theme }) => theme.purpleLight};
    border: none;
    font-size: var(--p16);
    font-weight: var(--weight-bold);
    padding: 10px 15px;
    border-radius: 15px;
  }
  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CardPlayerInformation = styled.div`
  height: 100%;
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  padding-top: 10px;
  margin: 0px 20px;
  max-width: 300px;
  text-align: center;
  padding-bottom: 10px;
  position: relative;

  .player-info {
    max-width: 200px;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    h3 {
      font-size: var(--h5);
      color: ${({ theme }) => theme.purpleMedium};
      font-weight: var(--weight-bold);
      align-self: center;
    }
    p {
      font-size: var(--p14);
      color: ${({ theme }) => theme.purpleMedium};
      font-weight: var(--weight-medium);
    }

    .player-level {
      width: auto;
      font-size: 20px;
      color: white;
      padding: 10px;
      margin-top: 10px;
      border-radius: 8px;
      background: ${({ theme }) => theme.shadePurpleDark};
      font-weight: var(--weight-regular);
    }
  }

  .player-coins {
    max-width: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export const CardPlayerActions = styled.div`
  height: 100%;
  max-width: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0;
  gap: 10px;
  color: ${({ theme }) => theme.purpleMedium};
  font-weight: var(--weight-bold);

  label {
    font-size: var(--h6);
  }

  .player-coins-container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
    .player-coins {
      display: flex;
      max-width: 150px;
      flex-direction: column;
      margin: 0;
    }
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }

  .buttons-actions {
    gap: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
  }
`;

export const ColorCountsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 665px;
  gap: 10px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.shadePurpleLight};
`;

export const ColorCountItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.shadePurpleDark};
  color: ${({ theme }) => theme.purpleLight};
  font-weight: var(--weight-bold);
`;

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
`;
