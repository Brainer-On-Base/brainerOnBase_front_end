import React from "react";
import { StyledAstronautCard1, StyledAstronautCard2, StyledAstronautCard3, StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";

export default function HistorySection() {

return <StyledHistorySection id="history">

    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column'}}>
        <h1  className={`animate__animated animate__fadeInDown animations title`}  >HISTORY</h1>
        <p className='animate__animated animate__fadeInDown animate__delay-1s'>The Rise of the Brainers: Journey to the Moon</p>
        {/* <h3  className={`animate__animated animate__fadeInDown animations`} >BRAINER</h3> */}
        <img src="./history.png" className={`animate__animated astronaut animations`} />
        
        {/* <p className='animate__animated animate__fadeInDown '>
          Then, the call went out: it was time to break free from the constraints of centralized control. The Brainer Society was born. Fueled by unity and the power of blockchain, the Brainers united to create a society where everyone has a voice, where actions are transparent, and where creativity knows no limits. Our token, BRAINER, became more than a currency—it’s our symbol of freedom, community, and power.
        </p>
        <p className='animate__animated animate__fadeInDown'>
          Our Society thrives in the Metaverse, where each Brainer is the architect of their own destiny. Our homes, the “Head Houses,” reflect our unique selves, places where we create, innovate, and connect. Here, we build, trade, and grow, with each interaction echoing the core value of our society: freedom. We’ve built a Marketplace where the imagination of each Brainer turns into tradeable assets, strengthening our shared economy and celebrating individuality.
        </p>
        <p className='animate__animated animate__fadeInDown '>
          Play-to-Earn became our empowerment tool. Every game, every mission, every Head House upgrade brings us closer to our goal. Our economy thrives not only on earning BRAINER tokens but on empowering each Brainer to take charge, customize their world, and trade on their own terms. Tokens earned in games, through achievements, or from trading rare NFTs are a testament to each Brainer’s journey.
        </p>
        <p className='animate__animated animate__fadeInDown '>
          Together, we are unstoppable. As we continue our journey, our collective mission is clear: we’re taking this Society beyond limits and to the moon.
        </p> */}
            <p className='animate__animated animate__fadeInDown firstText'>
          In the beginning, the world was simple, connected by ideas and dreams.
           We, the "Brainers," are everywhere—connected by a common force: knowledge, curiosity, and the vision of a better reality. 
           Living under a system that kept us limited, where only a select few held the reins of power, our potential was underestimated. 
           And so, the Brainers watched, learned, and waited for the right moment.
    </p>
    </StyledFlexFullCenterContainer>



    {/* <img src="./spaceship.png"  className={"img1"} />
      <BubbleDialog
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: '240px'
        }}
        positionStyle={{
          bottom: '-20px',
          right: '40px'
        }}
        width="400px"
      >
          <p>Take a look to our <span>TOKENOMICS</span> to clarify your doubts!</p>
          <p> We are a <span>REAL</span> community  token!</p>
      </BubbleDialog> */}
    </StyledHistorySection>;
}


// In the beginning, the world was simple, connected by ideas and dreams. We, the "Brainers," are everywhere—connected by a common force: knowledge, curiosity, and the vision of a better reality. Living under a system that kept us limited, where only a select few held the reins of power, our potential was underestimated. And so, the Brainers watched, learned, and waited for the right moment.
// Then, the call went out: it was time to break free from the constraints of centralized control. The Brainer Society was born. Fueled by unity and the power of blockchain, the Brainers united to create a society where everyone has a voice, where actions are transparent, and where creativity knows no limits. Our token, BRAINER, became more than a currency—it’s our symbol of freedom, community, and power.
// Our Society thrives in the Metaverse, where each Brainer is the architect of their own destiny. Our homes, the “Head Houses,” reflect our unique selves, places where we create, innovate, and connect. Here, we build, trade, and grow, with each interaction echoing the core value of our society: freedom. We’ve built a Marketplace where the imagination of each Brainer turns into tradeable assets, strengthening our shared economy and celebrating individuality.
// Play-to-Earn became our empowerment tool. Every game, every mission, every Head House upgrade brings us closer to our goal. Our economy thrives not only on earning BRAINER tokens but on empowering each Brainer to take charge, customize their world, and trade on their own terms. Tokens earned in games, through achievements, or from trading rare NFTs are a testament to each Brainer’s journey.
// Together, we are unstoppable. As we continue our journey, our collective mission is clear: we’re taking this Society beyond limits and to the moon.