import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_API_URL}/api/home/get-hero-data`;

export const getHeroData = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: { type }, // pass type dynamically
        });
        return response.data; // adjust according to your API response
    } catch (error) {
        console.error("Error fetching hero data:", error);
        return null;
    }
};
