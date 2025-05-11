import styled from "styled-components";
import { HButton } from "../../../../HocComponents";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #2a0845, #6441a5);
  padding: 20px 50px;
  color: #ffffff;
  overflow: hidden;
  z-index: 9999999;
  width: auto;
  height: auto;
`;

export const CharacterImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.p`
  text-align: left;
  font-size: 1.2em;
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const TraitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  overflow-y: auto;
`;

export const TraitCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled(HButton)`
  padding: 5px 10px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8em;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  font-size: 20px;
`;

export const RemoveButton = styled(ActionButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

export const CharacterStat = styled.div`
  margin-top: 15px;
  font-size: 1.4em;
  font-weight: bold;
  color: ${(props) => props.theme.goldColor};
`;

export const XPBar = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
`;

export const XPFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00ffcc, #00b3ff);
  transition: width 0.3s ease;
`;

export const XPText = styled.div`
  margin-top: 5px;
  font-size: 1em;
  color: #ffffff;
`;

export const RarityTag = styled.div`
  padding: 5px 15px;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => {
    switch (props.rarity) {
      case "Common":
        return "#bdc3c7";
      case "Rare":
        return "#3498db";
      case "Epic":
        return "#9b59b6";
      case "Legendary":
        return "#f39c12";
      default:
        return "#7f8c8d";
    }
  }};
`;

export const ExternalLink = styled.a`
  margin-top: 15px;
  color: #ffffff;
  font-size: 0.9em;
  text-decoration: underline;

  &:hover {
    color: #00ffcc;
  }
`;
