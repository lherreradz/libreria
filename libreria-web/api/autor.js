import { BASE_PATH } from "../utils/constants";


export async function createAutor(formData) {
    try {
      console.log("creando autor")
      console.log(formData)
      const url = `${BASE_PATH}/autor`;
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