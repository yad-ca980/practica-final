import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`; 
        const response = await authFetch(url);
        
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}
async function updateUser(formData, userId ){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
        console.log("URL: ", url)
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }
        const response = await authFetch(url, params);
        if (response.status = 200) throw response;
        return response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const userController = {
    getMe,
    updateUser
}
