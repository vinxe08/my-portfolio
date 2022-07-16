import { useState, useEffect } from 'react'
import './App.css';
import logo from './images/logo512.png'
import Layout from './pages/Layout';

function App() {
  const [countDown, setCountDown] = useState(0)
  const [showPage, setShowPage] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    if(countDown !== 100){
      setCountDown(count => count + 1)
      setTimeout(() => {
        setShowPage(true)
      },2800)
    }
  },[])

  const handleScroll = event => {
    setScrollValue(event.currentTarget.scrollTop)
  };

  return (
    <div className="App">
      { !showPage ?
        <div className="count__down">      
          <img src={logo} className="App-logo" alt="logo" />
          <div className="welcome__text">
            <h5>Welcome</h5>
            <h1>Loading</h1>
          </div>
        </div>
        :null  
      }
      { showPage ?
        <div className='app__container' onScroll={handleScroll}>
          <Layout scrollValue={scrollValue} />
        </div> 
      : null
      }
    </div>
  );
}

export default App;
