import axios from "axios";

export default function getRandom() {
    joke = [];

    x = (Math.floor(Math.random() * 2) == 0);
    
    if (x) {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(res => {
                joke = res.data
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        axios.get('https://official-joke-api.appspot.com/jokes/random')
            .then(res => {
                joke = res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    return joke;
}