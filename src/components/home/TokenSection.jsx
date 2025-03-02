import React from "react";
import { StyledTokenSection } from "../styled-components/container";
import useModals from "../../hooks/useSweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const TokenSection = () => {
  const { copied, copyToClipboard } = useModals();

  return (
    <StyledTokenSection
      onClick={() =>
        copyToClipboard("0x5b8BB48898b67c3481677c5Ac462786c18Db11F6")
      }
    >
      <h3 style={{ margin: "1em 0" }}>NEURON TOKEN</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="address">
        <h3>
          <span>$NRN</span> ADDRESS
        </h3>
        <p>
          <FontAwesomeIcon icon={faCopy} style={{ marginRight: "20px" }} />
          0x5b8BB48898b67c3481677c5Ac462786c18Db11F6
        </p>
      </div>
    </StyledTokenSection>
  );
};

export default TokenSection;
