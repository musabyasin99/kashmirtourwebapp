import {React, useState} from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

import 'react-multi-carousel/lib/styles.css';


import './App.css';

function App() {

  const [isVisible,setIsVisible] = useState(false);

  const ViewHideForm = () =>{
    setIsVisible(!isVisible);
    console.log(isVisible);
  }
  return (
    <div className="App">
      <Header btnAction={ViewHideForm} />
      <Home setFormState={isVisible}/>
      <Footer />
    </div>
  );
}

export default App;
