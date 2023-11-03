import { storageController } from "../api/token"
import { tokenExpired } from "./tokenExpired";



export const authFetch = async (url, params) => {
    const token = await storageController.getToken();

    const logout = () => {
        storageController.removeToken();
    }
    if (!token) {
        logout();
    } else {
        if (tokenExpired(token)) {
            logout();
        } else {
            //Funcion para añadir el token ala cabecera de la peticion considera los parametros que se le pasan
            const paramsTemp = {
                ...params,
                headers: {
                    //Añadimos los parametros que le pasan a la cabecera importante que Authorization que se pase despues de los parametros que se le pasan
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                //Hacemos la peticion con los parametros que se le pasan
                return await fetch(url, paramsTemp);
            } catch (error) {
                console.log(error);
            }
        }
    }
}