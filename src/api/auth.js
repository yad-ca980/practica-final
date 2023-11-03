import { ENV } from "../utils/constants";
import { userController } from "../../src/api/users"; 

async function register(email, username, password){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify({
                username,
                email,
                password,
            })  
        }
        const response = await fetch(url, params)
        
        if (response.status !== 200) throw response
        return response.json();
    } catch (error) {
        throw error;
    }
}

async function login(email, password) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
      const params = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ identifier: email, password})
      }
      const response = await fetch(url, params);
        if (response.status !== 200) throw response;

        
        const responseData = await response.json();

         
        const meResponse = await userController.getMe(responseData.token);
        console.log('Detalles de usuario:', meResponse);

        return responseData;
    } catch (error) {
        throw error;
    }
}

export const authApi = {
    register,
    login
};


      