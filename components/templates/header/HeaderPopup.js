import React, {useState, useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux' 
import Link from 'next/link'
import ContactForm from '../../../components/templates/form/ContactForm'
import { contactAdd } from '../../../store/actions/form/contact';

const HeaderPopup = ({}) => {

  const formStatus = useRef();  
  const dispatch = useDispatch();
  const [data, setData] = useState({ modalStatus: false  })  

  const contactValues = (data) => {
    dispatch(contactAdd(data));
  }
  
  const showModal = () => {
    setData({modalStatus: true });    
  }

  const closeModal = () => {   
    setData({modalStatus: false });     
  }

  const controlClick = (e) => {
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
    <ContactForm addContact={contactValues}/>
    <div className="header__contacts mobile">
      <ul>      
        <li><Link href="tel:380985472185" as="tel:380985472185"><a><i aria-hidden="true" className="fa fa-phone"></i> +38 098 54-721-85</a></Link></li>
        <li><Link href="mailto:vorzelski@gmail.com" as="mailto:vorzelski@gmail.com"><a><i className="fas fa-envelope"></i> vorzelski@gmail.com</a></Link></li>
      </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>  
  )  

}

export default HeaderPopup