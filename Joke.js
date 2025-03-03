// Joke.js

import React from "react";
 
import Button from "./Button";
import './Joke.css';
//alert('start')
const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    function fetchApi () {
        alert('joke');
       // fetch ("https://explorer.solana.com/address/5zHVHsqbzVQeMyHVcUn6QCUDrE7bX1hgaQkoi1M414Zw?cluster=devnet")

        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));


    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;