import React from "react";
import styled from "styled-components";
// Simulación de ítems
const items = [
  { id: 1, name: "Espada Mágica", icon: "🗡️" },
  { id: 2, name: "Poción de Vida", icon: "🧪" },
  { id: 3, name: "Escudo Legendario", icon: "🛡️" },
];

// Define cuántos slots tendrá tu inventario
const totalSlots = 20;

// Styled Components
const InventoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 500px;
  padding: 10px;
`;

const Slot = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(145deg, #2d0d56, #1e0938);
  border: 2px solid #7d3cff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  box-shadow: inset 0 0 10px rgba(125, 60, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: #ffd700;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.7);
    cursor: pointer;
  }

  span.icon {
    font-size: 24px;
    margin-bottom: 5px;
  }

  span.label {
    text-align: center;
  }
`;

const EmptySlot = styled(Slot)`
  opacity: 0.4;
  color: #aaa;
  font-style: italic;
`;
const MyInventory = () => {
  return (
    <InventoryGrid>
      {Array.from({ length: totalSlots }).map((_, index) => {
        const item = items[index];

        return item ? (
          <Slot key={index}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.name}</span>
          </Slot>
        ) : (
          <EmptySlot key={index}>
            <span>Vacío</span>
          </EmptySlot>
        );
      })}
    </InventoryGrid>
  );
};

export default MyInventory;
