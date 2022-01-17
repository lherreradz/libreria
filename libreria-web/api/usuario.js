import { BASE_PATH } from "../utils/constants";

export async function getUsuarios(logout) {
    try {
      const url = `${BASE_PATH}/usuario`;
      const result = await fetch(url);
      return result ? result : null;
    } catch (error) {
      return null;
    }
}


export async function createUsuario(formData) {
    try {
      console.log("creando usuario")
      console.log(formData)
      const url = `${BASE_PATH}/usuario`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      console.log(params.body)
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
}