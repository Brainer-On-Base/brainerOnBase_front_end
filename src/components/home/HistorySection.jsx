import React, { useEffect, useState } from "react";
import { StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";
import BubbleDialog from "../BubbleDialog";


export default function HistorySection() {
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const targets = document.getElementById('history');

      targets.forEach((target, index) => {
        const targetPosition = target.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (targetPosition < screenPosition) {
          setIsVisible(prevState => {
            const updatedState = [...prevState];
            updatedState[index] = true;
            return updatedState;
          });
        } else {
          setIsVisible(prevState => {
            const updatedState = [...prevState];
            updatedState[index] = false;
            return updatedState;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(isVisible);
  return <StyledHistorySection>
    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column'}}>
        <StyledFlexFullCenterContainer  style={{height: 'auto', borderTop: '1px solid white'}}/>
        <img src="./history.png"  />
        <h1>BRAINER</h1>
    </StyledFlexFullCenterContainer>



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
