import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.VITE_API_PROD_URL
    : "http://localhost:5000/api";

export const userEndpoints = {
  createUser: async (wallet, username) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/user/create`, {
        wallet,
        username,
      });
      return res.data;
    } catch (error) {
      console.error("❌ Error creating user:", error.message);
      throw error;
    }
  },

  editUser: async (wallet, username, mainCharacterNFT) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/user/${wallet}/edit`, {
        username,
        mainCharacterNFT,
      });
      return res.data;
    } catch (error) {
      console.error("❌ Error editing user:", error.message);
      throw error;
    }
  },

  getUserByWallet: async (wallet) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/user/${wallet}`);
      return res.data;
    } catch (error) {
      console.error("❌ Error fetching user by wallet:", error.message);
      throw error;
    }
  },

  addItemToInventory: async (wallet, item) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/user/${wallet}/add-item`,
        item
      );
      return res.data;
    } catch (error) {
      console.error("❌ Error adding item to inventory:", error.message);
      throw error;
    }
  },

  equipItem: async (wallet, itemId) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/user/${wallet}/equip`, {
        itemId,
      });
      return res.data;
    } catch (error) {
      console.error("❌ Error equipping item:", error.message);
      throw error;
    }
  },

  transferItem: async (fromWallet, toWallet, itemId) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/user/transfer-item`, {
        fromWallet,
        toWallet,
        itemId,
      });
      return res.data;
    } catch (error) {
      console.error("❌ Error transferring item:", error.message);
      throw error;
    }
  },
};
