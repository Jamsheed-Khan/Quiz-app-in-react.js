import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // let [cityname, setCityname] = useState("");
  let [currentWeather, setcurrentWeather] = useState(0);
  let [inputText, setinputText] = useState('')
  let [data, setData] = useState([]);
  let [value, setvalue] = useState("");

  function getDataFromApi(cityname) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=23452a215e99c24e452175b6ff4e8081&units=metric`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }

  
  // if (!data) {
  //   return (
  //     <h1>
  //       <img src="https://media0.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952tx2bnjwjvxugevqfbzfpw4ms0l025y24ub9mtcvx&ep=v1_gifs_search&rid=200w.gif&ct=g"
  //         alt="" />
  //     </h1>
  //   )
  // }
  console.log(data.main.temp);


  const searchWeather = () => {
    getDataFromApi(value);
    setvalue("");
  }

  return (
    <div className="App-header">
      <div className="nameDiv">
        <input type="text" value={value}  onChange={(e) => setvalue(e.target.value)}/>
        <button onClick={searchWeather}>Search</button>
        <p>{data.name}</p>
          <p>
            {data.main.temp}
          </p>
      </div>
    </div>
  )

}








export default App;


