import styled from "styled-components";
import { HBox, HButton } from "../../../HocComponents";

// 👉 StyledComponent para los botones del sidebar
export const SidebarButton = styled(HButton)`
  background: ${({ active }) => (active ? "#7d3cff" : "#2d0d56")};
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-content: flex-start;
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
  { key: "character", label: "🧍 Mi Personaje" },
  { key: "inventory", label: "🎒 Inventario" },
  { key: "notifications", label: " Notifications" },
  { key: "onSale", label: "🛒 En Venta" },
  { key: "sellDao", label: "🏦 Vender al DAO" },
  // { key: "personalData", label: "📋 Datos Personales" },
  { key: "wallet", label: "👛 Mi Wallet" },
  { key: "logout", label: "🚪 Cerrar Sesión" },
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
      style={{ minHeight: "70vh", maxHeight: "90vh" }}
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
