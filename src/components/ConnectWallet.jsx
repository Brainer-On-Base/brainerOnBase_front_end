import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Icono de billetera y de desconexión
import UseContract from "../hooks/useContract";

const ConnectWallet = () => {
  const {
    connectWallet: connectWalletProvider,
    disconnectWallet,
    account,
  } = UseContract();

  return (
    <div>
      {account ? (
        <div
          style={styles.accountContainer}
          onClick={disconnectWallet}
          title="Click to disconnect"
        >
          <FontAwesomeIcon icon={faWallet} style={styles.walletIcon} />
          <span style={styles.accountText}>
            {`${account.substring(0, 6)}...${account.substring(
              account.length - 4
            )}`}
          </span>
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.disconnectIcon} />
        </div>
      ) : (
        <button onClick={connectWalletProvider} style={styles.connectButton}>
          <FontAwesomeIcon icon={faWallet} style={styles.walletIcon} />
          Connect
        </button>
      )}
    </div>
  );
};

const styles = {
  accountContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ff437d",
    maxWidth: "200px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
  walletIcon: {
    marginRight: "8px",
    color: "white",
  },
  accountText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "14px",
    color: "#fff",
    fontWeight: "500",
  },
  disconnectIcon: {
    marginLeft: "8px",
    color: "#ff437d",
  },
  connectButton: {
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "#ff437d",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s, transform 0.3s",
  },
};

export default ConnectWallet;
