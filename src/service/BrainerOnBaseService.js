import axios from "axios";
import { pixelBrainerCollectionEndpoints } from "./PixelBrainerCollection";

export const API_BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.API_BASE_URL
    : "http://localhost:5000/api"; // Cambia esto si tu backend tiene otra URL base

const BrainerOnBaseService = {
  ...pixelBrainerCollectionEndpoints,
};

export default BrainerOnBaseService;
