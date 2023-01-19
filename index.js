import axios from "axios";

const getRandom = async () => {
    const x = Math.random() < 0.5;
    
    if (x === false) {
        const res = await axios.get('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
            headers: {
                accept: 'application/json',
                'X-RapidAPI-Key': '2d42e62b44mshd5b7056f6335843p11e6a0jsn41ca8f6b6f97',
            }
        });
        console.log(x)
        return res.data;
    }
    
    const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
    console.log(x);
    return res.data;
}

export default getRandom;