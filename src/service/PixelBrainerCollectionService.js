import axios from "axios";
import { API_BASE_URL } from "./BrainerOnBaseService";

export const pixelBrainerCollectionEndpoints = {
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

  // Obtener la cantidad de NFTs creados
  getNFTQuantityMinted: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/nfts/minted`);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching NFT quantity:", error.message);
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
  mintNFT: async (nftData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/nfts/mint`, nftData);
      return response.data;
    } catch (error) {
      console.error("❌ Error creating or updating NFT:", error.message);
      throw error;
    }
  },
};
