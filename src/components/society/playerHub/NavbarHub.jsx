import styled from "styled-components";
import { HBox, HButton, HTitle } from "../../../HocComponents";
import { GiOpenTreasureChest } from "react-icons/gi";
import { TbWallet } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";
import { IoLogInOutline, IoNotificationsOutline } from "react-icons/io5";
import { TbBrandCashapp } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { PiTreasureChest } from "react-icons/pi";

// 👉 StyledComponent para los botones del sidebar
export const SidebarButton = styled(HButton)`
  background: ${({ active }) => (active ? "#7d3cff" : "#2d0d56")};
  display: flex;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-content: flex-start;
  align-items: center !important;
  height: 100%;
  width: 100%;
  font-size: 20px;
  border: ${({ active }) =>
    active ? "1px solid white" : "1px solid transparent "}!important;

  &:hover {
    border: 1px solid white !important;
    ${({ active }) => !active && "transform: translateX(5px)"};
  }
`;

// 👉 Datos para render dinámico
const navItems = [
  {
    key: "character",
    label: (
      <>
        <FiUser size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px" align="center">
          Character
        </HTitle>
      </>
    ),
  },
  {
    key: "inventory",
    label: (
      <>
        <PiTreasureChest size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px" align="center">
          Inventory
        </HTitle>
      </>
    ),
  },
  {
    key: "notifications",
    label: (
      <>
        <IoNotificationsOutline size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px" align="center">
          Notifications
        </HTitle>
      </>
    ),
  },
  {
    key: "onSale",
    label: (
      <>
        <MdOutlineSell size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px" align="center">
          On sale
        </HTitle>
      </>
    ),
  },
  {
    key: "sellDao",
    label: (
      <>
        <TbBrandCashapp size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px" align="center">
          Sell to DAO
        </HTitle>
      </>
    ),
  },
  // { key: "personalData", label: "📋 Datos Personales" },
  {
    key: "wallet",
    label: (
      <>
        <TbWallet size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px" align="center">
          MY WALLET
        </HTitle>
      </>
    ),
  },
  {
    key: "logout",
    label: (
      <>
        <IoLogInOutline size={30} style={{ marginRight: "8px" }} />
        <HTitle fontSize="22px">SIGN OUT</HTitle>
      </>
    ),
  },
  // Futuro:
  // { key: "craft", label: "⚒️ Craftear" },
];

export const NavbarHub = ({ currentView, setView }) => {
  const handleClick = (key) => {
    if (key === "logout") {
      // Acá iría tu lógica para cerrar sesión
      console.log("Cerrar sesión...");
      return;
    }
    setView(key);
  };

  return (
    <HBox
      direction="column"
      width="20%"
      background={"shadePurpleDark"}
      height="100%"
      style={{ minHeight: "70vh", height: "100%" }}
      borderRadius="10px"
      justify="flex-start"
      padding="20px 10px"
      gap="10px" // 👉 separa los botones
    >
      {navItems.map((item) => (
        <SidebarButton
          key={item.key}
          active={currentView === item.key}
          onClick={() => handleClick(item.key)}
        >
          {item.label}
        </SidebarButton>
      ))}
    </HBox>
  );
};
