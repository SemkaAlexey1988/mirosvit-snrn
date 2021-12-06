import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.css'

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.validator.rules.email.message = 'has invalid format'
    this.validator.rules.numeric.message = 'must be a number'
    this.validator.rules.required.message = 'is required'
    this.state = {
      name: '',
      email: '',  
      phone: '', 
      comment: '',
      nameError: '',
      emailError: '',
      phoneError: '',
      submitedForm: false
      } 
  }

  validateForm = (inputName) => {
    this.validator.message('name', this.state.name, 'required')
    this.validator.message('email', this.state.email, 'required|email')
    this.validator.message('phone', this.state.phone, 'required')
    /* 'required|numeric' */ 
    console.log(this.validator)
    if(inputName == 'Name' || inputName == 'Submited'){
    if (this.validator.fieldValid('name')) {
      this.setState({nameError: ''})
    }else{
      this.setState({nameError: `The name field ${this.validator.errorMessages.name}`})
    }
    }
    if(inputName == 'Email' || inputName == 'Submited'){    
    console.log(this.validator.rules.email.message)  
    if (this.validator.fieldValid('email')) {
      this.setState({emailError: ''})
    }else{

      this.setState({emailError: `The email field ${this.validator.errorMessages.email}`})
    } 
    }
    
    if(inputName == 'Phone' || inputName == 'Submited'){
    if (this.validator.fieldValid('phone')) {
      this.setState({phoneError: ''})
    }else{
      this.setState({phoneError: `The phone field ${this.validator.errorMessages.phone}`})
    }
    } 
    
  }

  submitForm = () => {
  this.setState({submitedForm: true})    
  let submitedForm = 'Submited'; 
  this.validateForm(submitedForm);
  if (this.validator.allValid()) {
  let orderObject = {
  name: this.name.value,
  email: this.email.value,
  phone: this.phone.value,
  comment: this.comment.value  
  }
  this.props.addOrderValues(orderObject);
  this.setState({
    name: '',
    email: '',
    phone: '',
    comment: ''
});
  } else {
    this.validator.showMessages();
    this.forceUpdate();
  }
  }
  changeValue = () => {
  this.setState({
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    comment: this.comment.value
});
  }

  blurValueName = (name) => {
    this.validateForm(name);
  }

  blurValueEmail = (email) => {
    this.validateForm(email);
  }

  blurValuePhone = (phone) => {
    this.validateForm(phone);
  }




  stateValueName = (name) => {
    if(this.state.submitedForm){
    this.validateForm(name);
    }
  }  

  stateValueEmail = (email) => {
    if(this.state.submitedForm){
    this.validateForm(email);
    }
  } 

  stateValuePhone = (phone) => {
    if(this.state.submitedForm){
    this.validateForm(phone);
    }
  } 

  render() {
    let name = "Name";
    let email = "Email";
    let phone = "Phone";
    let comment = "Comment";
    let { nameError, emailError, phoneError, ...values } = this.state
    return (
      <div className="order-form form">
        <h2>Order form</h2>
      <div className="form-group">
<input ref={(name) => this.name = name }  className="form-control" placeholder="name" id="o-name" onChange={this.changeValue.bind(this, name)} 
onKeyUp={this.stateValueName.bind(this, name)} onBlur={this.blurValueName.bind(this, name)} type="text" value={this.state.name} />
<p className="error">{nameError}</p>
{/* this.validator.message('name', this.state.name, 'required') */}
</div>
<div className="form-group">
<input ref={(email) => this.email = email }  className="form-control" placeholder="e-mail" onChange={this.changeValue.bind(this, email)} 
onKeyUp={this.stateValueEmail.bind(this, email)} onBlur={this.blurValueEmail.bind(this, email)}  type="text" value={this.state.email} />
<p className="error">{emailError}</p>
</div>
<div className="form-group">
<InputMask mask="+3\8 099 999 99 99" maskChar="-" ref={(phone) => this.phone = phone }  className="form-control" placeholder="phone" onChange={this.changeValue.bind(this, phone)} 
onKeyUp={this.stateValuePhone.bind(this, phone)} onBlur={this.blurValuePhone.bind(this, phone)} type="text" value={this.state.phone} />
<p className="error">{phoneError}</p>
</div>
<div className="form-group">
<textarea ref={(comment) => this.comment = comment }  className="form-control" placeholder="comment" onChange={this.changeValue.bind(this, comment)} 
type="text" value={this.state.comment}/>
</div>
<div className="form-group">
      <button className="btn btn-primary" onClick={this.submitForm.bind(this)}>Order</button>
      </div>
    </div>
    );
  } 
}

export default OrderForm 






