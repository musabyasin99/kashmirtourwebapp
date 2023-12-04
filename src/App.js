import {React, useState} from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

import 'react-multi-carousel/lib/styles.css';


import './App.css';
import {Route,Routes,useNavigate } from 'react-router-dom';
import Package from './Pages/Package/Package';
import Plans from './Pages/Plans/Plans';
import Loader from './Components/Loader/Loader';

function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<App/>}>
  //     </Route>
  //   )
  // )
  const history = useNavigate();
  const [isVisible,setIsVisible] = useState(false);
  const [isActive,setIsActive] = useState(false);
  const [isLoading,setIsLoading] = useState(true);

  const ViewHideForm = () =>{
    handleButtonClick();
    setIsVisible(!isVisible);
  }

  const handleButtonClick = () => {
      setIsActive(!isActive);
  }

  const handleLinkClick = () =>{
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    });
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },3000);
    if(isVisible){
      setIsVisible(false);
    }
    if(isActive){
      handleButtonClick();
    }
  }
  setTimeout(()=>{
    setIsLoading(false);
  },3000);
    return (
      <>
        {
          isLoading ? 
            <Loader /> :
            (<div className="App">
            <Header btnAction={ViewHideForm} sidebarState={isActive} setSidebarState={handleButtonClick} setAllState={handleLinkClick}/>
              <main>
                <Routes>
                  <Route exact path='/kashmirtourwebapp' element={<Home setFormState={isVisible} sidebarState={isActive} setAllState={handleLinkClick}/>} />
                  <Route exact path='/kashmirtourwebapp/plan' element={<Plans setFormState={isVisible} setAllState={handleLinkClick} />}/>
                  <Route exact path='/kashmirtourwebapp/package/:id' element={<Package setFormState={isVisible}/>}/>
                </Routes>
              </main>
            <Footer />
          </div>) 
        }
      </>
    );
}

export default App;
