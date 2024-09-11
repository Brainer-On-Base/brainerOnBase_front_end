import React, { useState, useEffect } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setError("MetaMask no está instalado");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setError("MetaMask no está instalado");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (err) {
      setError("Error al conectar MetaMask");
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