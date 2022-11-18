import axios from "axios";

const getRandom = async () => {
    let joke = null;

    const x = (Math.floor(Math.random() * 2) == 0);
    
    if (x) {
        const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
        joke = res.data;
    }

    const res = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    joke = res.data;

    return joke;
}

export default getRandom;