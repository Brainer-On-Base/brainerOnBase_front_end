import React, { useState, useEffect } from "react";
import useModals from "../hooks/useSweetAlert";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const {showPopUp} = useModals()

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        showPopUp({text:'Metamask is not installed', icon:'error'})
        return;
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        setAccount(accounts[0]);
        showPopUp({text:'Your Wallet is connected.', icon:'success'})

      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        showPopUp({text:'Metamask is not installed', icon:'error'})
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (err) {
      showPopUp({text:'Error while connecting with metamask. Try again later', icon:'error'})
      console.error(err);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      {account ? (
        <p>Billetera conectada: {account}</p>
      ) : (
        <button onClick={connectWallet}>Conectar MetaMask</button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ConnectWallet;