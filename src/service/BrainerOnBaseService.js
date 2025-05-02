import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Cambia esto si tu backend tiene otra URL base

const BrainerOnBaseService = {
  // Obtener todos los NFTs con paginación y filtros
  getAllNFTs: async (params = {}) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/nfts`, { params });
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching NFTs:", error.message);
      throw error;
    }
  },

  // Obtener un NFT específico por su ID
  getNFTById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/nfts/${id}`);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching NFT by ID:", error.message);
      throw error;
    }
  },

  // Crear o actualizar un NFT
  createOrUpdateNFT: async (nftData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/nfts/mint`, nftData);
      return response.data;
    } catch (error) {
      console.error("❌ Error creating or updating NFT:", error.message);
      throw error;
    }
  },
};

export default BrainerOnBaseService;
