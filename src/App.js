// CSS
import './styles/App.css';
//
import { useEffect, useState } from 'react';
import { Aircraft } from './Aircraft';
import { Input } from './Input';
// Api call
import { fetchImg } from './api';

function App() {
  // States
  const [img, setImg] = useState([]);
  const [input, setInput] = useState("");

  const onFilterValueSelected = filterValue => {
    console.log(filterValue);
  }

  const printData  = (e) => {
    fetchImg(setImg, input);
  };
  
  const handleChange = e => {
    setInput(e.target.value);
    printData();
  }

  const onDownload = (e) => {
    e.preventDefault();
    console.log('Downloaded');
  }

  return (
    <div className="App">
      <header>
          <Input onChange={handleChange} />
      </header>
      <section>
      {/*Futur filter section here*/}
      </section>
      <main>
        <Aircraft 
          img={img} 
          onDownload={onDownload}
        />
      </main>
    </div>
  );
};

export default App;
