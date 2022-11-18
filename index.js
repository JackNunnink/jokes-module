import axios from "axios";

const getRandom = () => {
    let joke = null;

    const x = (Math.floor(Math.random() * 2) == 0);
    
    if (x) {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(res => {
                joke = res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    axios.get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            joke = res.data
        })
        .catch(err => {
            console.log(err)
        })

    return joke;
}

export default getRandom;