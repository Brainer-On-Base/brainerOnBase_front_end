import { pixelBrainerCollectionEndpoints } from "./PixelBrainerCollectionService";
import { userEndpoints } from "./UserService";

export const API_BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.VITE_API_PROD_URL
    : "http://localhost:5000/api";

const BrainerOnBaseService = {
  ...pixelBrainerCollectionEndpoints,
  ...userEndpoints,
};

export default BrainerOnBaseService;
