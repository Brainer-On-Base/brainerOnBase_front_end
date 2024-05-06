import React, { useEffect, useState } from "react";
import { StyledTokenomicsSection } from "../styled-components/container";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { ResponsiveChartContainer } from '@mui/x-charts';
import BubbleDialog from "../BubbleDialog";

export default function TokenomicsSection() {
    const [activeBubble, setActiveBubble] = useState(true);

    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     setActiveBubble(false);
    //   }, 6000);

    //   // Limpiar el temporizador cuando el componente se desmonte o activeBubble cambie a true
    //   return () => clearTimeout(timeoutId);
    // }, [activeBubble]); // Ejecutar solo una vez al montar el componente

    const tokenomicsData = [
        { id: 0, value: 2000000000, label: 'Community & Airdrops - 20%' },
        { id: 1, value: 1500000000, label: 'Incentives & Rewards - 15%' },
        { id: 2, value: 3000000000, label: 'Liquidity & Markets - 30%' },
        { id: 3, value: 2000000000, label: 'Development Team - 20%' },
        { id: 4, value: 1000000000, label: 'Marketing Campaing - 10%' },
        { id: 5, value: 500000000, label: 'Token Burning - 5%' },
    ]


  return <StyledTokenomicsSection>
        <h1>
            TOKENOMICS
        </h1>
        <img className="img1" src="./Designer (6).png" onClick={() => setActiveBubble(!activeBubble)}/>
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
                    fontSize: 18,
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
