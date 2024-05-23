import axios from "axios";
import { BASE_URL } from "./constant.js";

export async function getAllData (){
    const response = await axios(`${BASE_URL}/products`)
    return response
}
 export async function getDataById(id) {
    const response = await axios(`${BASE_URL}/products/${id}`)
    return response
}
