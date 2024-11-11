import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Icono de billetera y de desconexión
import useModals from "../hooks/useSweetAlert";
import AccountContext from "../provider/AccountProvider/AccountContext";
import UseContract from "../hooks/useContract";

const ConnectWallet = () => {
  const { connectWallet: connectWalletProvider, disconnectWallet, account} = UseContract()


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
            {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
          </span>
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.disconnectIcon} />
        </div>
      ) : (
        <button onClick={connectWalletProvider} style={styles.connectButton}>
          <FontAwesomeIcon icon={faWallet} style={styles.walletIcon} />
        </button>
      )}
    </div>
  );
};

const styles = {
  accountContainer: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "#f0f0f0",
    padding: "8px 12px",
    borderRadius: "20px",
    // border: "1px solid #ff437d",
    maxWidth: "200px",
    overflow: "hidden",
    cursor: "pointer",
  },
  walletIcon: {
    marginRight: "8px",
    color: "#ff437d",
    // color: "#888"
  },
  accountText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "14px",
    color: "#888",
    fontWeight: "500",
  },
  disconnectIcon: {
    marginLeft: "8px",
    color: "#888",
  },
  connectButton: {
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    // backgroundColor: "#4CAF50",
    color: "#888",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
};


export default ConnectWallet;
