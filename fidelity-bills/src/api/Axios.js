/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 07/06/2022 - 09:40:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/06/2022
    * - Author          : 
    * - Modification    : 
**/
import axios from 'axios';
const BASE_URL = 'http://localhost:3500';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});