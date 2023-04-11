import './App.css';
import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import Header from './components/Header';
import Input from './components/Input';
import Card from './components/Card';
import axios from 'axios';

function App() {

  const [value, setValue] = useState('');
  const [emoji, setEmoji] = useState([]);


  // console.log(value);
  // console.log(emoji);

//Fetch
//  const url = "https://6423241f001cb9fc20393732.mockapi.io/emoji";

  // useEffect(() => {
  //   fetch(url)
  //     .then(data => data.json())
  //     .then(data => setEmoji(data))

  //   return
  //   //убрать повторение / убить
  // }, [])

  //Axios
  const url = "https://6423241f001cb9fc20393732.mockapi.io/emoji";
  useEffect(() => {
  axios.get(url)
    .then((response) => {
      setEmoji(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  return
}, [])


  return (

    <div className="App">
      <Header />
      <div className={classes.block} >
        
      <Input
       setValue={setValue} />

      <Card
       emoji={emoji}
       value={value} />
        

          {/* <div className={classes.input}>
            <input type="text"  placeholder='You emogi?'  onChange={(e) => setValue(e.target.value)} />
          </div> */}
          

          {/*<button>X</button>*/}

          {/* <div className={classes.emoji}>
            {emoji.
            filter(elem => {
              if (elem.title.toLowerCase().includes(value.split(' ').join('').toLowerCase())) {
                return true
              }
              return false
            })
            .map((elem, index) => (
              <ul className={classes.card} key={index}>
                <li className={classes.symbol}>{elem.symbol}</li>
                <li className={classes.title}>{elem.title}</li>
                <li className={classes.keywords}>{elem.keywords}</li>
              </ul>
            ))}
          
        </div> */}
      
      </div>
      {/* Footer */}
      <div className={classes.footer}>
        <p>2022 &copy; Made with love by me </p>
      </div>

    </div >
  );
}

export default App;