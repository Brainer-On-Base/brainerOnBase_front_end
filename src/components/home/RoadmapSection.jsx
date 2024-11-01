import React, { useEffect, useState } from "react";
import { StyledAboutSection, StyledAstronautCard1, StyledAstronautCard2, StyledAstronautCard3, StyledBubbleDialog, StyledFlexFullCenterContainer, StyledRoadmapCard, StyledRoadmapSection } from "../styled-components/container";

export default function RoadmapSection() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      setIsScrolling(true);

      // Detectar dirección del scroll
      if (currentScrollPos > lastScrollPos) {
        setScrollingDown(true);
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
        setScrollingDown(false);
      }

      // Actualizar última posición del scroll
      setLastScrollPos(currentScrollPos);

      // Limpiar el timeout si el usuario sigue haciendo scroll
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Detener la animación después de un tiempo sin scroll
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setScrollingDown(false);
        setScrollingUp(false);
      }, 150); // Ajusta el tiempo según tus necesidades
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup para evitar memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollPos]);

return <StyledRoadmapSection id="history">

  

    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column', width:'100%'}}>
        <h1  className={`animate__animated animate__fadeInDown animations title`} >ROADMAP</h1>
        {/* <h3  className={`animate__animated animate__fadeInDown animations`} >BRAINER</h3> */}
        {/* <img src="./history.png" className={`animate__animated astronaut animations`} /> */}

        <img
          src="./spaceship.png"
          className={`img1 ${isScrolling ? "scrolling" : ""} ${scrollingDown ? "scrolling-down" : ""} ${scrollingUp ? "scrolling-up" : ""}`}
          alt="spaceship"
        />
          
        <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 1</h2>
          <p style={{margin: 0}}><span>The rise of the Brainers</span></p>
          {/* <p style={{marginTop: '-20px', marginBottom: '2em'}}>
          In this initial chapter, our mission is to gather the necessary funds and support to bring this revolutionary project to life.
          We will launch an inaugural collection of NFTs and the first drop of the main character, the <span>BRAINER</span>.
          Each NFT will serve not only as a collectible work of art but also as a symbol of membership in our Society.
          With these resources, we will take the first steps toward building Brainer Society and its ecosystem.</p> */}
            {/* <p style={{margin: 0}}>MAKE NOISE !</p>
            <p style={{margin: 0}}>Inaugural collection of NFTs in pixelArt of diferents brainers</p>
            <p style={{margin: 0}}>Drop of the main character. <span>BRAINER</span></p>
            <p style={{margin: 0}}>Creation of the <span>BRAINER SOCIETY</span></p> */}
          <ul>
          <li><p className="text">Social media marketing campaign to build buzz and ignite <span>community</span> engagement.</p></li>
          <li><p className="text">Inaugural collection of NFTs in pixelArt of diferents brainers.</p></li>
            <li><p className="text">Drop of the main NFT character.</p></li>
            <li><p className="text">Creation of the <span>BRAINER SOCIETY</span>community.</p></li>
          </ul>
        </StyledRoadmapCard>

        <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 2</h2>
          <p style={{margin: 0, marginBottom: '1em'}}><span>Building the team</span></p>
          <p className="text"><span>TEAM BUILDING</span>. This chapter is dedicated to bringing together passionate individuals who share our vision and will help build the future of <span>BRAINER SOCIETY</span>.</p>
        </StyledRoadmapCard>


        <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 3</h2>
          <p style={{margin: 0, marginBottom: '1em'}}><span>Building the Brainer Society</span></p>
          <p className="text"> 
          We aim to lunch the first version of the game on a test network, allowing players to explore their Head Houses and the metaverse.
          We’ll also kick off development of the <span>BRAINER MARKETPLACE</span>, where Brainers will exchange their NFT items. 
          <span>BRAINER SOCIETY</span>.</p>
        </StyledRoadmapCard>

        <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 4</h2>
          <p style={{margin: 0, marginBottom: '1em'}}><span>The Metaverse Economy Unleashed</span></p>
          <p className="text">
                Launch Brainer Society on the mainnet, along with the full rollout of the BRAINER token economy.
                This milestone enables players to earn and trade tokens through:
          <ul>
            <li className="text"> Play Mini-games</li>
            <li className="text"> Unlocking rewards and achievements</li>
            <li className="text"> Visit and interact with the community</li>
          </ul>
          </p>


        </StyledRoadmapCard>
        
    </StyledFlexFullCenterContainer>

  
    </StyledRoadmapSection>;
}
