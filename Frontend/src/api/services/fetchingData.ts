import { ENDPOINTS } from "../constants";
import { http } from "../http";


export const getLogedUsers = () => {
   return http.get(ENDPOINTS._USRES)
}

export const getUserById = (id: string | undefined) => {
   return http.get(`${ENDPOINTS._USER}/${id}`)
}

export const getUserTask = (userName: string) => {
   return http.get(`/api${ENDPOINTS._USER}/${userName}`)
}
