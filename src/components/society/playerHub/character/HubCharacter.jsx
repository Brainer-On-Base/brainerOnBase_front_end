import React, { useEffect, useState } from "react";
import {
  HBox,
  HButton,
  HModal,
  HPopUp,
  HTitle,
} from "../../../../HocComponents";
import { FiRefreshCcw } from "react-icons/fi";
import {
  FaInfoCircle,
  FaPencilAlt,
  FaPlus,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import BrainerOnBaseService from "../../../../service/BrainerOnBaseService";
import { setUserData } from "../../../../redux/slices/userSlice";
import {
  ActionButton,
  ButtonsContainer,
  CardContainer,
  CharacterImage,
  CharacterStat,
  Description,
  ExternalLink,
  RarityTag,
  RemoveButton,
  TraitCard,
  TraitsContainer,
  XPBar,
  XPFill,
  XPText,
} from "./hubCharacter.styled";

const HubCharacter = () => {
  const {
    stats,
    equippedItems,
    username,
    wallet,
    level,
    experience,
    experienceToNextLevel,
    mainCharacterNFT,
  } = useSelector((state) => state.user);
  const [xpProgress, setXPProgress] = useState(0);
  const [characterRarity, setCharacterRarity] = useState("Common");
  const [modalEditUsername, setModalEditUsername] = useState(false);
  const dispatch = useDispatch();
  //Calculate experience progress
  useEffect(() => {
    const calculateXPProgress = () => {
      const progress = (experience / experienceToNextLevel) * 100;
      setXPProgress(progress);
    };

    calculateXPProgress();
  }, [experience, experienceToNextLevel]);

  // Calculate rarity based on equipped items
  useEffect(() => {
    const calculateRarity = () => {
      const rarityValues = {
        Common: 0,
        Rare: 0,
        Epic: 0,
        Legendary: 0,
      };

      Object.values(equippedItems).forEach((item) => {
        const rarity = item?.rarity || "Common";
        rarityValues[rarity] += 1;
      });

      const maxRarity = Object.keys(rarityValues).reduce((a, b) =>
        rarityValues[a] > rarityValues[b] ? a : b
      );

      setCharacterRarity(maxRarity);
    };

    calculateRarity();
  }, [equippedItems]);

  const updateUsername = async (newUsername) => {
    try {
      await BrainerOnBaseService.editUser(wallet, newUsername);
      dispatch(setUserData({ username: newUsername }));
      HPopUp({
        message: "Username updated successfully!",
        type: "success",
      });
    } catch (error) {
      console.error("Error updating username:", error);
      HPopUp({
        message: "Error updating username. Please try again.",
        type: "error",
      });
      return;
    }

    setModalEditUsername(false);
  };

  return (
    <HBox
      width="100%"
      justify="center"
      align="flex-start"
      height="100%"
      padding="20px"
    >
      {/* Card Personaje */}
      <CardContainer>
        <CharacterImage
          src={mainCharacterNFT ?? "/nftCollectionImages/unknown.png"}
          alt={mainCharacterNFT ?? "Unrevealed Brainer"}
        />

        <HBox width="120%" direction="column" align="flex-start">
          <CharacterStat level={level ?? 0}>
            Level {mainCharacterNFT ? level : 0}
          </CharacterStat>

          <HBox direction="column" align="flex-start" width="100%" gap="0">
            <XPBar>
              <XPFill style={{ width: `${xpProgress}%` }} />
            </XPBar>

            <XPText>
              {experience} / {experienceToNextLevel} XP
            </XPText>
          </HBox>

          <HBox width="100%" justify="flex-start" align="center">
            <HTitle fontSize={"24px"}>Rarity:</HTitle>
            <RarityTag rarity={characterRarity}>{characterRarity}</RarityTag>
            <FaInfoCircle
              fontSize={"15px"}
              style={{ position: "absolute", right: "0", top: "-10px" }}
              title="Rarity based on equipped items"
            />
          </HBox>

          <ActionButton
            onClick={() => console.log("Train Character")}
            disabled={!mainCharacterNFT}
          >
            Train
          </ActionButton>

          <ExternalLink
            href={mainCharacterNFT ? mainCharacterNFT : "/society"}
            target={mainCharacterNFT ? "_blank" : "_self"}
          >
            {mainCharacterNFT
              ? "View on Brainer Base"
              : "Main Character unrevealed"}
          </ExternalLink>
        </HBox>
      </CardContainer>

      {/* Info Extra del Personaje */}
      <HBox width="100%" direction="column" align="flex-start" padding="20px">
        <HBox>
          <HTitle fontSize={"24px"}>Username:</HTitle>
          <HTitle fontSize={"20px"} useTitleCase={false}>
            {!mainCharacterNFT ? username || wallet : "Unrevealed Brainer"}
          </HTitle>
          <HButton
            padding={"10px"}
            // disabled={!mainCharacterNFT}
            onClick={() => setModalEditUsername(true)}
          >
            <FaPencilAlt size={"14px"} />
          </HButton>
        </HBox>
        <Description>
          A unique Brainer, ready for new adventures in the Brainer Society
        </Description>

        <TraitsContainer>
          {Object.keys(equippedItems).map(
            (attr) =>
              attr !== "_id" && (
                <TraitCard key={attr}>
                  <HBox>
                    <HTitle fontSize={"24px"} width={"auto"} color={"white"}>
                      <strong>{attr.toUpperCase()}</strong>:{" "}
                    </HTitle>
                    <HTitle
                      fontSize={"24px"}
                      useTitleCase={false}
                      textTransform="none"
                      align="left"
                      color={"purpleLight"}
                    >
                      {equippedItems[attr] ?? "Empty"}
                    </HTitle>
                  </HBox>
                  <ButtonsContainer>
                    <ActionButton
                      onClick={() => console.log(`Swap ${attr}`)}
                      disabled={!mainCharacterNFT}
                    >
                      {!equippedItems[attr] ? (
                        <FaPlus style={{ marginRight: "8px" }} />
                      ) : (
                        <FiRefreshCcw style={{ marginRight: "8px" }} />
                      )}
                      {!equippedItems[attr] ? "Add" : "Change"}
                    </ActionButton>
                    <RemoveButton
                      disabled={!equippedItems[attr]}
                      onClick={() => console.log(`Remove ${attr}`)}
                    >
                      <FaRegTrashAlt style={{ marginRight: "8px" }} />
                      Remove
                    </RemoveButton>
                  </ButtonsContainer>
                </TraitCard>
              )
          )}
        </TraitsContainer>
      </HBox>

      {/* Modal para editar el nombre */}
      <HModal
        title="Edit Username"
        description="Change your username to a new one."
        onCloseFunction={() => setModalEditUsername(false)}
        onConfirmFunction={(value) => updateUsername(value)}
        confirmText="Change"
        cancelText="Cancel"
        showModal={modalEditUsername}
        inputType="text"
        isInput={true}
        placeholderInput="Enter new username"
      />
    </HBox>
  );
};

export default HubCharacter;
