import React, { useEffect, useState } from "react";
import { StyledHistorySection } from "../styled-components/container";
import BubbleDialog from "../BubbleDialog";


export default function HistorySection() {

  return <StyledHistorySection>


    <p>HISTORY</p>


    <img src="./tokenomic.png"  className={"img1"}/>
      <BubbleDialog
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: '240px'
        }}
        positionStyle={{
          bottom: '40px',
          right: '40px'
        }}
        width="400px"
      >
          <p>Take a look to our <span>TOKENOMICS</span> to clarify your doubts!</p>
          <p> We are a <span>REAL</span> community  token!</p>
      </BubbleDialog>
    </StyledHistorySection>;
}
