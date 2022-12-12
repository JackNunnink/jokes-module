import axios from "axios";

const getRandom = async () => {
    const options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': '2d42e62b44mshd5b7056f6335843p11e6a0jsn41ca8f6b6f97',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };

    const x = (Math.floor(Math.random() * 2) == 0);
    
    if (x) {
        await axios.request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    const res = await axios.get('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random');
    return res.data;
}

export default getRandom;