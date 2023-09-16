import React from "react";
import "./App.css";

//create three components like Avatar ,Intro,SkillList

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

//Avatar component
function Avatar() {
  return (
    <>
      <img className="avatar" src="/52.jpg" alt="ashok image" />
    </>
  );
}

//Intro component
function Intro() {
  return (
    <>
      <h1>Frontend Developer</h1>
      <p>
        I am Frontend Developer,I am good with HTML5,CSS3 and JavaScript.I am
        also familiar with frame works like React.Js and Angular.I love coding
        :)
      </p>
    </>
  );
}

//create SkillList component
function SkillList() {
  return (
    <div className="skill-list">
      <>
        <Skill skill="React.js" emoji="✌️" color="blue" />
        <Skill skill="JavaScript" emoji="❤️" color="green" />
        <Skill skill="Java" emoji="🤐" color="yellow" />
        <Skill skill="HTML+CSS" emoji="👩🏾‍🤝‍🧑🏻" color="brown" />
        <Skill skill="SQL" emoji="🥳" color="orange" />
      </>
    </div>
  );
}

//create skill component

function Skill(props) {
  //props is an object
  //console.log(props);
  return (
    //to add styling we use style={{property:value}}
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
