import React, {useState, useEffect, useRef} from 'react'

const HeaderPopup = ({}) => {

  const formStatus = useRef();  
  const [data, setData] = useState({ modalStatus: false  })  
  
  const showModal = () => {
    setData({modalStatus: true });    
  }

  const closeModal = () => {   
    setData({modalStatus: false });     
  }

  const controlClick = (e) => {
    console.log(data.modalStatus)
    if(data.modalStatus){
    if(formStatus.current.contains(e.target)){
    return;
    }
    setData({modalStatus: false }); 
    }
  } 

  useEffect(() => {
      document.addEventListener('mousedown', controlClick, false)
    return () => {
      document.removeEventListener('mousedown', controlClick, false)
    }
  });

  return(
    <div className="header-wrapper">
    <div className="header-popup">
    <button id="popup-1" className="popup button" onClick={showModal}>Button</button>
    <div className="modal-wrapper popup-1" style={{display: data.modalStatus ? 'block' : 'none'}}>
    <div className="modal-table">
    <div className="modal-table__cell">
    <div ref={formStatus} className="modal-block">
    <div className="close-modal" onClick={closeModal}>x</div>
    <p>111</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>  
  )  

}

export default HeaderPopup