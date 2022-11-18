import axios from "axios";

const getRandom = async () => {
    const x = (Math.floor(Math.random() * 2) == 0);
    
    if (x) {
        const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return res.data;
    }

    const res = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    return res.data;
}

export default getRandom;