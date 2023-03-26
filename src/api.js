import axios from "axios";

export const fetchImg = (state, input)  => {
    const URL = `https://api.pexels.com/v1/search?query=${input}`;
    const API_KEY = 'pCLR1ZmkxeSBlxzRqfccKa2SN9JAF671g8MI0NfTXrxAQOQwMZ3cg2Tk';
    
    axios.get(URL, {
        headers: {
            Authorization: API_KEY
        }
    })
    .then(res => state(res.data.photos))
}

export const fetchAircrats = async (state) => {
    const URL = 'http://localhost:8080';

    await axios.get(URL)
    .then(res => state(res.data)) 
}