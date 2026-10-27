import api from "../api/axios.ts";

export const getAboutInfo = async () => {
    try {
        const response = await api.get('/about/');
        return response.data.data[0] || null;
    } catch (error) {
        console.error("Xatolik bo'ldi, lekin loaderni to'xtatamiz:", error);
        return null;
    }
};