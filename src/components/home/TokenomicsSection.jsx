import React, { useEffect, useState } from "react";
import { StyledTokenomicsSection } from "../styled-components/container";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { ResponsiveChartContainer } from '@mui/x-charts';

export default function TokenomicsSection() {


    const tokenomicsData = [
        { id: 0, value: 2000000000, label: 'Community & Airdrops - 20%' },
        { id: 1, value: 2000000000, label: 'Incentives & Rewards - 20%' },
        { id: 2, value: 3000000000, label: 'Liquidity & Markets - 30%' },
        { id: 3, value: 1500000000, label: 'Development Team - 15%' },
        { id: 4, value: 1000000000, label: 'Marketing Campaing - 10%' },
        { id: 5, value: 500000000, label: 'Token Burning - 5%' },
    ]


  return <StyledTokenomicsSection>
        <h1>
            TOKENOMICS
        </h1>
        <img className="img1" src="./Designer (6).png"/>
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
