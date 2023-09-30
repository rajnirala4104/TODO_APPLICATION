import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const sendUserInfoToTheBackend = (userId: undefined | number, userName: string | undefined) => {
   try {
      const Config = {
         headers: {
            "Content-Type": "application/json"
         }
      }

      return http.post(ENDPOINTS._USRES, { id: userId, name: userName }, Config);
   } catch (e) {
      console.log("Oops!!", e)
   }
}