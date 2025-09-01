import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_API_URL}/api/home`;

export const getHomeData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/list`);
        return response.data.home; // your API response has "home"
    } catch (error) {
        console.error("Error fetching home data:", error);
        return null;
    }
};
