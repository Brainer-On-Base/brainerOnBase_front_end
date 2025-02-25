import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import BrainerOnBaseMarketplace from "../pages/BrainerOnBaseMarketplace";
import BrainerOnBaseMain from "../pages/BrainerOnBaseMain";
import NftCollectionList from "../pages/NftCollectionList";
import PlayerPage from "../pages/PlayerPage";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/home" element={<Home />} />
      {/* <Route path={"/game"} element={<BrainerOnBaseMain />} /> */}
      {/* <Route path={"/marketplace"} element={<BrainerOnBaseMarketplace />} /> */}
      <Route path={"/nft-list"} element={<NftCollectionList />} />
      <Route path={"/player/profile"} element={<PlayerPage />} />
      <Route path={"/player/inventory"} element={<PlayerPage />} />
      <Route path={"/"} element={<App />} />
    </ReactRoutes>
  );
};

export default Routes;
