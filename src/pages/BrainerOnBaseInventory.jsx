import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AccountContext from "../provider/AccountProvider/AccountContext";
import Inventory from "../components/society/inventory/Inventory";
import AppLayout from "../components/AppLayout/AppLayout";

const BrainerOnBaseInventory = () => {
  const { account, setAccount, web3provider, setWeb3Provider, isConnected } =
    useContext(AccountContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isConnected) navigate("/home");
  }, [isConnected]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppLayout title="INVENTORY">
      <Inventory />
    </AppLayout>
  );
};

export default BrainerOnBaseInventory;
