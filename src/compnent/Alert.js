import React from 'react'

function Alert(props){
  const capital =(word)=>{
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    
       props.Alert && <div>
      <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert"><strong>{capital(props.Alert.type)} : </strong>{props.Alert.msg}
  
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>

    </div>
  )
}

export default Alert