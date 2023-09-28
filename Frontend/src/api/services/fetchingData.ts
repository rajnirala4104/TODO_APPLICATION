import { ENDPOINTS } from "../constants";
import { http } from "../http";


export const getLogedUsers = () => {
   return http.get(ENDPOINTS._USRES)
}

export const getUserTask = (userName: string) => {
   return http.get(`${ENDPOINTS._USER}/${userName}`)
}
