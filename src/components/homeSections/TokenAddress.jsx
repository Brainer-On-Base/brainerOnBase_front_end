import React from "react";
import { StyledTokenSection } from "../styled-components/container";
import useModals from "../../hooks/sweetAlertModal/useSweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const TokenAddress = ({ ...props }) => {
  const { copied, copyToClipboard } = useModals();

  return (
    <StyledTokenSection
      {...props}
      onClick={() =>
        copyToClipboard("0x5b8BB48898b67c3481677c5Ac462786c18Db11F6")
      }
    >
      <div className="address">
        <h3>
          <span>$BRNR</span> ADDRESS
        </h3>
        <p>
          <FontAwesomeIcon icon={faCopy} style={{ marginRight: "20px" }} />
          0x317F5ab655Bb9c0bD309E65021fB495aDEa0B240
        </p>
      </div>
    </StyledTokenSection>
  );
};

export default TokenAddress;
