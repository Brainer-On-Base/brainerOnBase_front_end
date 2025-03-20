import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import PlayerHub from "../components/society/playerHub/PlayerHub";

const BrainerOnBasePlayerHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("playerHub");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <AppLayout title="PLAYER HUB" id={"playerHub"}>
      <PlayerHub />
    </AppLayout>
  );
};

export default BrainerOnBasePlayerHub;
