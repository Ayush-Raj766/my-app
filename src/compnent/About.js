import React, {useState} from 'react'

export default function About() {
  const [mystyle , setmystle] = useState({
    color : 'black',
      backgroundColor : 'wheat'
    // color : 'black',
    // backgroundColor : 'white'
  })
  const [mystyle2 , setmystle2] = useState({
    // color :'#ffeaea',
    // backgroundColor : '#3b3737'
    
  })
  const[btntext ,setbtntext] = useState("Enable dark mode")
  const toggle = ()=>{
    if(mystyle2.color === 'white'){
      let dark = {
        color : 'black',
      backgroundColor : 'wheat'
      }
      let dark2 ={
        color : 'black',
      backgroundColor : 'white'
      }
      setmystle(dark);
      setmystle2(dark2)
      setbtntext('Enable dark mode')
    }
    else{
      let dark = {
        color :'#ffeaea',
      backgroundColor : '#3b3737',
      border : '1px solid white'
      }
      let dark2 ={
        color : 'white',
      backgroundColor : 'black',
      border : '1px solid white'
      }
      setmystle(dark);
      setmystle2(dark2)
      setbtntext('Enable light mode')
    }
  }
  
  const darkmode = ()=>{
    // console.log("dark mode")
    let dark = {
      color :'#ffeaea',
    backgroundColor : '#3b3737'
    }
    let dark2 ={
      color : 'white',
    backgroundColor : 'black'
    }
    setmystle(dark);
    setmystle2(dark2)
  }
  const lightmode = ()=>{
    // console.log("dark mode")
    let dark = {
      color : 'black',
    backgroundColor : 'wheat'
    }
    let dark2 ={
      color : 'black',
    backgroundColor : 'white'
    }
    setmystle(dark);
    setmystle2(dark2)
  }


  return (
    <div className='container' style={mystyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item"style={mystyle2}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle2}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle2}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary my-3" onClick={darkmode}>Enable Dark Mode</button>
<button type="button" className="btn btn-primary my-3 mx-3" onClick={toggle}>{btntext}</button>
<button type="button" className="btn btn-primary my-3 mx-3" onClick={lightmode}>Enable light Mode</button>
    </div>
  )
}
