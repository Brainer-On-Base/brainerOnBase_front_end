import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import BrainerOnBaseShop from "../components/shop/BrainerOnBaseShop";
import BrainerOnBaseMain from "../components/game/BrainerOnBaseMain";
import NftCollectionList from "../pages/NftCollectionList";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/home" element={<Home />} />
      <Route path={"/game"} element={<BrainerOnBaseMain />} />
      <Route path={"/shop"} element={<BrainerOnBaseShop />} />
      <Route path={"/nft-list"} element={<NftCollectionList />} />
      <Route path={"/"} element={<App />} />
    </ReactRoutes>
  );
};

export default Routes;
