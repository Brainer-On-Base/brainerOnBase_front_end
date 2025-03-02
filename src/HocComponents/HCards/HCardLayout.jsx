import React from "react";
import { CardContainer, CardImage } from "./Cards.styled";

const HCardLayout = ({
  index = 1,
  img,
  infoCardComponent,
  actionsComponent,
  maxWidth = "800px",
  height,
  ...props
}) => {
  return (
    <CardContainer maxWidth={maxWidth} height={height} {...props}>
      <h1>{index}</h1>
      {img?.img && (
        <CardImage>
          {img?.avatarPortrait && (
            <img className="portrait" src={img.avatarPortrait} alt="Portrait" />
          )}
          <img src={img.img} alt={img.alt} />
        </CardImage>
      )}
      {infoCardComponent}
      <div className="actions">{actionsComponent}</div>
    </CardContainer>
  );
};

export default HCardLayout;
