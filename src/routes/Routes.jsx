import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import BrainerOnBaseMarketplace from "../pages/BrainerOnBaseMarketplace";
import BrainerOnBaseMain from "../pages/BrainerOnBaseGame";
import NftCollectionList from "../pages/NftCollectionList";
import BrainerOnBasePlayerHub from "../pages/BrainerOnBasePlayerHub";
import TokenDetails from "../pages/TokenDetails";
import BrainerOnBaseSociety from "../pages/BrainerOnBaseSociety";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/home" element={<Home />} />
      <Route path="/playerHub" element={<BrainerOnBasePlayerHub />} />
      <Route path={"/society"} element={<BrainerOnBaseSociety />} />
      <Route path={"/game"} element={<BrainerOnBaseMain />} />
      <Route path={"/marketplace"} element={<BrainerOnBaseMarketplace />} />
      <Route path={"/nft-list"} element={<NftCollectionList />} />
      <Route path={"/token-details"} element={<TokenDetails />} />
      <Route path={"/"} element={<App />} />
    </ReactRoutes>
  );
};

export default Routes;
