// Button.js
import './Button.css'
import React, { useState } from 'react';

const DynamicVariableComponent = () => {
  // Declare a state variable named 'dynamicValue' with an initial value of 0
  const [dynamicValue, setDynamicValue] = useState(0);
  const updateValue = (values) => {
    setDynamicValue(values);
  };

  async function fetchAp(){
    // alert('fat boy')
     var res = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
             const json = await res.json()
            // .then((data) => setJoke(data.joke));
             //var aal = JSON.stringify(json)
             //alert (aal);
             let joke = JSON.stringify(json.joke);
             joke = joke.split("\n").join("a");
            // joke = joke.split("\", "");
            // joke = joke.replaceAll("\", "");
             //let al = joke.split('\n')
             //joke = al[0];
             //alert(joke)
             updateValue(joke);
 }

  return (
    <div>
      <h1> Joke: {dynamicValue}</h1>
      <button onClick={fetchAp}> Generate a Joke </button>
    </div>
  );
};

// Export Button Component
//export default Button;
export default DynamicVariableComponent;