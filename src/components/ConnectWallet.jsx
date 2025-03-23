import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faBars,
  faBoxOpen,
  faUserCircle,
  faSignOutAlt,
  faShop,
} from "@fortawesome/free-solid-svg-icons"; // Iconos adicionales
import UseContract from "../hooks/useContract";
import { useNavigate } from "react-router-dom";
import { TbWallet } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { HButton } from "../HocComponents";

const ConnectWallet = () => {
  const {
    connectWallet: connectWalletProvider,
    disconnectWallet,
    account,
  } = UseContract();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <>
      {account ? (
        <HButton style={styles.accountContainer} onClick={toggleUserMenu}>
          <TbWallet size={30} style={styles.walletIcon} />
          <span style={styles.accountText}>
            {`${account.substring(0, 6)}...${account.substring(
              account.length - 4
            )}`}
          </span>
          <FontAwesomeIcon icon={faBars} style={styles.disconnectIcon} />
          <div
            style={{
              ...styles.userMenu,
              maxHeight: showUserMenu ? "300px" : "0",
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            {/* <div style={styles.menuItem} onClick={() => navigate("/profile")}>
              <FontAwesomeIcon
                icon={faUserCircle}
                style={styles.menuItemIcon}
              />
              Profile
            </div>
            <div style={styles.menuItem} onClick={() => navigate("/inventory")}>
              <FontAwesomeIcon icon={faBoxOpen} style={styles.menuItemIcon} />
              Inventory
            </div>
            <div
              style={styles.menuItem}
              onClick={() => navigate("/marketplace")}
            >
              <FontAwesomeIcon icon={faShop} style={styles.menuItemIcon} />
              Marketplace
            </div> */}

            <div style={styles.menuItem} onClick={disconnectWallet}>
              <IoLogInOutline size={30} style={styles.menuItemIcon} />
              Disconnect
            </div>
          </div>
        </HButton>
      ) : (
        <HButton onClick={connectWalletProvider} style={styles.connectButton}>
          <FontAwesomeIcon icon={faWallet} style={styles.walletIcon} />
          Connect
        </HButton>
      )}
    </>
  );
};

const styles = {
  accountContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: "4px 8px",
    borderRadius: "20px",
    maxWidth: "200px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    marginLeft: "10px",
    zIndex: "9999999999999999",
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
    cursor: "pointer",
  },
  connectButton: {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    padding: "4px 8px",
    color: "#fff",
    fontWeight: "bold",
    border: "1px solid #ff0cdf",
    borderRadius: "20px",
    justifyContent: "flex-start",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s, transform 0.3s",
  },
  userMenu: {
    position: "absolute",
    width: "200px",
    top: "100%",
    right: "10px",
    backgroundColor: "#2a2a2a",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "8px",
    zIndex: "1000",
    overflow: "hidden",
  },
  menuItem: {
    padding: "8px 16px",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s, opacity 0.3s",
    display: "flex",
    alignItems: "center",
  },
  menuItemHover: {
    backgroundColor: "#3a3a3a",

    opacity: "0.9",
  },
  menuItemIcon: {
    marginRight: "8px",
  },
};

export default ConnectWallet;
