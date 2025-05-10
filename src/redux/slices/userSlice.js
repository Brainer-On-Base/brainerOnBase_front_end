import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: null,
  username: "",
  level: 1,
  experience: 0,
  experienceToNextLevel: 100,
  stats: {
    brainpower: 100,
    focus: 0,
    memory: 0,
    logic: 0,
    creativity: 0,
    processingSpeed: 0,
  },
  mainCharacterNFT: null,
  inventory: [],
  equippedItems: {
    head: null,
    body: null,
    legs: null,
    feet: null,
    hands: null,
    accessory: null,
  },
  tickets: 0,
  achievements: [],
  isConnected: false,
  lastLogin: null,
};

export const userSlice = createSlice({
  name: "brainer",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateStats: (state, action) => {
      state.stats = { ...state.stats, ...action.payload };
    },
    addItemToInventory: (state, action) => {
      state.inventory.push(action.payload);
    },
    equipItem: (state, action) => {
      const { slot, itemId } = action.payload;
      // des-equipar otros del mismo slot
      state.inventory.forEach((item) => {
        if (item.slot === slot) item.equipped = false;
        if (item.itemId === itemId) item.equipped = true;
      });
      state.equippedItems[slot] = itemId;
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const {
  setUserData,
  updateStats,
  addItemToInventory,
  equipItem,
  setIsConnected,
} = userSlice.actions;
export default userSlice.reducer;
