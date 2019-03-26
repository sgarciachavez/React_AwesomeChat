import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
  	messages: []
  };
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

    sendMessage = (mess) => {	
      if(mess){
        this.setState((currState) => ({
        	messages: currState.messages.concat([mess])
        }))
      }
    }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    		<ChatWindow 
    			user={users[0].username} 
				messages={this.state.messages}
				sendMessage = {this.sendMessage}/>

			<ChatWindow 
    			user={users[1].username} 
				messages={this.state.messages}
				sendMessage = {this.sendMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
