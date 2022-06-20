
import './App.css';
import DogData from './components/DogsData';
import {React, useState, useEffect} from 'react';

function App() {

    const [dog, setDog] = useState(null);

    const getData = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');

      const data = await response.json();

      setDog(data);
    };
    useEffect(() => {
      getData();
    
    } , []);
  return (
    <div className="App">

      <h1>Dog Picture Generater</h1>
      <input type = 'button' value = 'Click me!' onClick = {getData}/>
      <DogData dog = {dog.message} />
    </div>
  );
}

export default App;

