import './App.css';
import { useEffect, useState } from 'react';
import { GetCat } from './components/cats';

function App() {
  const [cats, setCats] = useState([])


  useEffect(function getCats() {
    GetCat()
      .then(res => res.json())
      .then(data => setCats(data))
  }, [])

  const randomImg = () =>{
 GetCat()
 .then(res => res.json())
      .then(data => setCats(data))
  }


  return (
    <div className="App">
        {cats.length ? <img src={cats[0].url} alt="" /> : null   }
       
       <button onClick={randomImg}>scscsdc</button>
    </div>
  );
}

export default App;
