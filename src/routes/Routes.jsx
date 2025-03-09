import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import BrainerOnBaseMarketplace from "../pages/BrainerOnBaseMarketplace";
import BrainerOnBaseMain from "../pages/BrainerOnBaseGame";
import NftCollectionList from "../pages/NftCollectionList";
import BrainerOnBaseInventory from "../pages/BrainerOnBaseInventory";
import BrainerOnBaseProfile from "../pages/BrainerOnBaseProfile";
import BrainerOnBaseSociety from "../pages/BrainerOnBaseSociety";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/home" element={<Home />} />
      <Route path="/society" element={<BrainerOnBaseSociety />} />
      <Route path={"/game"} element={<BrainerOnBaseMain />} />
      <Route path={"/marketplace"} element={<BrainerOnBaseMarketplace />} />
      <Route path={"/nft-list"} element={<NftCollectionList />} />
      <Route path={"/profile"} element={<BrainerOnBaseProfile />} />
      <Route path={"/inventory"} element={<BrainerOnBaseInventory />} />
      <Route path={"/"} element={<App />} />
    </ReactRoutes>
  );
};

export default Routes;
