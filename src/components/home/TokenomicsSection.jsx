import React, { useEffect, useState } from "react";
import { StyledTokenomicsSection } from "../styled-components/container";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { ResponsiveChartContainer } from '@mui/x-charts';
import BubbleDialog from "../BubbleDialog";

export default function TokenomicsSection() {
    const [activeBubble, setActiveBubble] = useState(true);
    const [activeBubble2, setActiveBubble2] = useState(true);
    const [clicksImage3,setClicksImage3] = useState(0);

    useEffect(() => {
      if(clicksImage3 === 14) {
        setClicksImage3(0)
      }
      console.log(clicksImage3);
    }, [clicksImage3]);

    const totalSupply = 10000000000; // Suministro total

    const tokenomicsData = [
      { "id": 2, "value": Math.round(totalSupply * 0.45), "label": "Liquidity & Markets - 45%" },
        { "id": 0, "value": Math.round(totalSupply * 0.15), "label": "Community & Airdrops - 15%" },
        { "id": 1, "value": Math.round(totalSupply * 0.15), "label": "Incentives & Rewards - 15%" },
        { "id": 3, "value": Math.round(totalSupply * 0.10), "label": "Development Team - 10%" },
        { "id": 4, "value": Math.round(totalSupply * 0.10), "label": "Marketing Campaign - 10%" },
        { "id": 5, "value": Math.round(totalSupply * 0.05), "label": "Token Burning - 5%" }
    ];

  return <StyledTokenomicsSection>
        {/* <img src="./Designer (39).png" onClick={() => setClicksImage3(clicksImage3 + 1)} className={"img3"}/>
        <BubbleDialog
          id="bubbletokenomics"
          active={activeBubble}
          positionDialogSpik={{
            left: '20px'
          }}
          positionStyle={{
            top: '150px',
            left: '150px'
          }}
          width="520px"
          height="20px"
        >
          <p style={{fontSize: '60px'}}>
              <span style={{fontSize: '60px', color: "#96105f"}}>TOKENOMICS !  !  !  !</span>
          </p>
        </BubbleDialog> */}
        <h1 style={{marginBottom: 0}}>TOKENOMICS</h1>
        <img src="./Designer (6).png" onClick={() => setActiveBubble(!activeBubble)} className={"img1"}/>
        <BubbleDialog
          active={activeBubble}
          positionDialogSpik={{
            left: '240px'
          }}
          positionStyle={{
            top: '-14px',
            right: '60px'
          }}
          width="400px"
        >
            <p>Take a look to our <span>TOKENOMICS</span> to clarify your doubts!</p>
            <p> We are a <span>REAL</span> community  token!</p>
        </BubbleDialog>
    <div className="pie-chart-container" id="pieContainer">
        <PieChart
            series={[
                
                {
                    data: tokenomicsData,
                    // arcLabel: (item) => `${item.value.toLocaleString()}`,
                    arcLabel: (item) => `${item.value.toLocaleString()}`,

                    valueFormatter: (v, { dataIndex }) => {
                        return `${v.value.toLocaleString()}`;
                        },
                    arcLabelMinAngle: 45,
                    innerRadius: 38,
                    outerRadius: 220,
                    paddingAngle: 2,
                    cornerRadius: 5,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            width={1300}
            height={600}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                    fontFamily: '"Luckiest Guy", cursive',
                    fontSize:'14px',
                    zIndex: '999999',
                    color: 'white'
                },
            }}
            slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: 20,
                    fill: 'white',
                    fontFamily: '"Luckiest Guy", cursive',
                  },
                  markGap: 10,
                  itemGap: 22,
                },
              }}
        />
    </div>
    <img className="img2" src="./Designer (8).png"/>
    </StyledTokenomicsSection>;
}
