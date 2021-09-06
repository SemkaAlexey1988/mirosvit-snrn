import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import 'bootstrap/dist/css/bootstrap.css'
 
export default class CommentsForm extends Component {
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
<React.Fragment>
            <h1>Write a Review</h1>
          <div className="form-group">
    <label>{name}</label>
    <input ref={(name) => this.name = name }  className="form-control" placeholder="name" id="o-name" onChange={this.changeValue.bind(this, name)} 
    onKeyUp={this.stateValueName.bind(this, name)} onBlur={this.blurValueName.bind(this, name)} type="text" value={this.state.name} />
    <p className="error">{nameError}</p>
    {/* this.validator.message('name', this.state.name, 'required') */}
    </div>
    <div className="form-group">
    <label>{email}</label>
    <input ref={(email) => this.email = email }  className="form-control" placeholder="e-mail" onChange={this.changeValue.bind(this, email)} 
    onKeyUp={this.stateValueEmail.bind(this, email)} onBlur={this.blurValueEmail.bind(this, email)}  type="text" value={this.state.email} />
    <p className="error">{emailError}</p>
    </div>
    <div className="form-group">
    <label>{comment}</label>
    <textarea ref={(comment) => this.comment = comment }  className="form-control" placeholder="comment" onChange={this.changeValue.bind(this, comment)} 
    type="text" value={this.state.comment}/>
    </div>
    <br/>
          <button className="btn btn-primary" onClick={this.submitForm.bind(this)}>Order</button>
        </React.Fragment>
        );
      } 
}