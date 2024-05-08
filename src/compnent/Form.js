import React, { useState } from 'react'
// import Some from './Some';

export default function Form(props) {
  const [email, setemail] = useState('')
  const findemail = () => {
    let str = text
    const email =
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    // console.log(str.match(email))
    // document.getElementById('some').innerHTML=str.match(email);

    // return str.match(email);
    setemail(str.match(email)+ "  ")
  }
  const handleup = () => {
    // console.log("clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert('Converted to uppercase','success')
  }
  const handledown = () => {
    // console.log("clicked" +text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert('Converted to LowerCase','success')
  }
  const handleon = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  }
  // const findemail = (some) => {
  //   let str = text
  //   const email =
  //     /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  //   // console.log(str.match(email))
  //   // document.getElementById('some').innerHTML=str.match(email);

  //   return str.match(email);
  // }
  // const store = () => {
  //   let store = findemail()
  //   return store;

  // }
  
  
  
  // document.getElementsByClassName("email").innerHTML = store();

  const [text, setText] = useState('')
  
  
  // setText('new text')
  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor : props.mode==='light'?'white':'#384552', color:props.mode==='light'?'black':'white'}} />
          <div id="emailHelp" className="form-text"style={{color:props.mode==='light'?'black':'white'}} >We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" style={{backgroundColor : props.mode==='light'?'white':'#384552', color:props.mode==='light'?'black':'white'}}/>
        </div>
        <div className="form-floating">
          {/* <label for="myBox">Comments</label> */}
          <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleon} style={{backgroundColor : props.mode==='light'?'white':'#384552', color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" /> check me out
          {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
        </div>
        <button type="submit" className="btn btn-primary mx-3">Submit</button>
        <button className='btn btn-primary mx-3' onClick={handleup}>Conver to upper case</button>
        <button className='btn btn-primary mx-3' onClick={handledown}>Conver to lower case</button>
        <button className='btn btn-primary mx-3' onClick={findemail}>find email id</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2 className='h-3'>your text summry</h2>
        <p className='para'>{text.split(" ").length - 1} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:'Enter something in the text box above to preview'}</p>
        <h3>email is</h3>
        <p>{email.length>0?email:'Above text have no any email'}</p>
        {/* <h3>email is</h3>; */}
        {/* <textarea name="" id="" cols="80" rows="2" value={store()}></textarea> */}
      </div>
      </>
  )
}


