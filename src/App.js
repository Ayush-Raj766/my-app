// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './compnent/Nav';
import Alert from './compnent/Alert';
import Form from './compnent/Form';
import About from './compnent/About';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";

function App() {
  const[darkmode ,setmode]= useState('light')
  const[alert , setalert] = useState(null)
  const showalert=(message ,type)=>{
      setalert({
        msg :message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  let toggle=()=>{
    if(darkmode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#131429';
      showalert('light mode has been enable' ,'success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert('light mode has been enable' ,'success')
    }
  }
  return (
    <>
    {/* <Router> */}
     
    <Nav title='my-app' mode={darkmode} toggle={toggle}/>
    <Alert Alert={alert}/>
    <div className="container">
   {/* <Routes> */}
          {/* <Route path="/about" element={<About />}></Route> */}
          <About />
          <Form showalert ={showalert} heading="Enter your details" mode={darkmode}/>
          {/* <Route path="/home" element={<Form showalert ={showalert} heading="Enter your details" mode={darkmode}/>}> */}
          
            {/* <Home /> */}
          {/* </Route>
        </Routes> */}
      {/* <About/> */}
      {/* <Form showalert ={showalert} heading="Enter your details" mode={darkmode}/> */}
    </div>
  {/* </Router> */}
    </>
  );
}

export default App;
