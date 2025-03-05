import React, { useEffect } from "react";
import AccountContext from "./AccountContext";
import { ethers } from "ethers";

const AccountProvider = ({ children }) => {
  const [account, setAccount] = React.useState(() => {
    return localStorage.getItem("account")
      ? localStorage.getItem("account")
      : null;
  });
  const [web3provider, setWeb3Provider] = React.useState(() => {
    const provider = localStorage.getItem("web3provider");
    return provider ? new ethers.BrowserProvider(window.ethereum) : null;
  });
  const [contract, setContract] = React.useState(() => {
    const contractAddress = localStorage.getItem("contractAddress");
    return contractAddress
      ? new ethers.Contract(
          contractAddress,
          BRAINER_BPC_NFT_ABI_CONTRACT.abi,
          web3provider
        )
      : null;
  });
  const [isConnected, setIsConnected] = React.useState(!!account);
  const [refreshContractProvider, setContractRefresh] = React.useState(false);

  useEffect(() => {
    if (account) {
      localStorage.setItem("account", account);
      setIsConnected(true);

      if (!web3provider) {
        try {
          const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
          setWeb3Provider(eth_web3_provider);
          localStorage.setItem("web3provider", "true");
        } catch (error) {
          console.error("Error recreando el proveedor:", error);
        }
      }
    } else {
      setIsConnected(false);
      setAccount(null);
      setWeb3Provider(null);
      localStorage.removeItem("account");
      localStorage.removeItem("web3provider");
    }
  }, [account, refreshContractProvider]);

  return (
    <AccountContext.Provider
      value={{
        account,
        web3provider,
        contract,
        setAccount,
        setWeb3Provider,
        setContract,
        isConnected,
        setContractRefresh,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
