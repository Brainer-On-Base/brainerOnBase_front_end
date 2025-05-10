import React from "react";
import { Tab, TabContainer } from "./HTabs.styled";

const HTabs = ({ tabs, moreFont = true, ...props }) => {
  return (
    <TabContainer {...props}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab?.title + index}
          $active={tab.active}
          onClick={tab.onClick}
          moreFont={moreFont}
        >
          {tab.title}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default HTabs;
