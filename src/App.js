import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    userName: 'Fatalblade015',
    paragraph1: 'This is the first paragraph. I once was a young boy at the ripe age of 8. I was in the park with my mother when I decided to take a dump by a tree. Why I did this, I will never know.',
    paragraph2: `What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.`
  };

  handleChange = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>DONE: Create TWO new components: UserInput and UserOutput</li>
          <li>DONE: UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>DONE: Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>DONE: Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>DONE: Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>DONE: Add a method to manipulate the state (=> an event-handler method)</li>
          <li>DONE: Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>DONE: Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>DONE: Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput
          handleChange = {this.handleChange}
          currentName = {this.state.userName}/>
        <UserOutput 
          userName = {this.state.userName}
          paragraphs = {[this.state.paragraph1, this.state.paragraph2]}/>
      </div>
    );
  }
}

const UserInput = (props) => {
    return (
      <label>
        Username:
        <input type="text" value={props.currentName} onChange={props.handleChange} />
        <button onClick = {props.handleChange}>Click to change the username!</button>
      </label>
    );  
}

const UserOutput = (props) => {
    return (
      <div>
        <h2>Username: {props.userName}</h2>
        <p>{props.paragraphs[0]}</p>
        <p>{props.paragraphs[1]}</p>
      </div>
    );
}

export default App;
