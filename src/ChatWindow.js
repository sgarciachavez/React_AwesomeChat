import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {
  	state = {
    	newMess: ''
    }
	
   isDisabled = () => {
     let flag = false
     if(this.state.newMess === ''){
     	flag = true
     }
    return flag;
  };

  handleInputChange = event => {
    const value = event.target.value
   
	this.setState(() => ({
      newMess: value
    }));
  };

handleSubmit = event => {
    event.preventDefault();
  	
  	let newMess = {}
    newMess.username = this.props.user
  	newMess.text = this.state.newMess
  	this.props.sendMessage(newMess)
  	this.setState(() => ({
    	newMess: ''
    }))
  	
  };
  render(){
     const { user, messages } = this.props
     
  	return(
    	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user ? 'message sender' : 'message recipient'
                  }
                >
				  <p>{message.username}: {message.text}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input 
					type="text" 
					className="form-control" 
					placeholder="Enter your message..." 
					value={this.state.newMess}
					onChange={this.handleInputChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
    )
  }
}

export default ChatWindow