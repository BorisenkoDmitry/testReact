import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiToken = axios.create();

apiToken.interceptors.request.use(config => {
    if (localStorage.getItem("user")) {
        config.headers = {
            "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        }
    }
    return config
}, error => {

})


apiToken.interceptors.response.use(config => {
    if (localStorage.getItem("user")) {
        config.headers = {
            "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        }
    }
    return config
}, error => {
    localStorage.removeItem("user");
    const navigate = useNavigate()
    navigate("/login")
})

export default apiToken;