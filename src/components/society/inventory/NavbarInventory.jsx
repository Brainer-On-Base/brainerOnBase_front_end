import styled from "styled-components";
import { HBox, HButton } from "../../../HocComponents";
import { maxHeight, minHeight } from "@mui/system";

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
  border: 1px solid transparent !important;

  &:hover {
    border: 1px solid white !important;
    /* background: #7d3cff; */
    transform: translateX(5px);
  }
`;

export const NavbarInventory = ({ currentView, setView }) => {
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
    >
      <SidebarButton
        active={currentView === "inventory"}
        onClick={() => setView("inventory")}
      >
        🎒 Inventario
      </SidebarButton>

      <SidebarButton
        active={currentView === "onSale"}
        onClick={() => setView("onSale")}
      >
        🛒 En Venta
      </SidebarButton>

      <SidebarButton
        active={currentView === "sellDao"}
        onClick={() => setView("sellDao")}
      >
        Sell to DAO
      </SidebarButton>

      {/* Para futuro */}
      {/* <SidebarButton onClick={() => setView("craft")}>⚒️ Craftear</SidebarButton> */}
    </HBox>
  );
};
