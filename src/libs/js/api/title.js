import axios from "axios";
 const getTitle = axios(import.meta.env.VITE_SLOGAN_URL)

 export {getTitle}