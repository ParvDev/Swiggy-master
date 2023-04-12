import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

class About extends Component{
  
  constructor(props){
    super(props);
    //defining useState in Class Based Component
    console.log("Parent - constructor");
  }

  //this function is the best for API Calls
  componentDidMount(){
    console.log("Parent - ComponentDidMount ");
  }

  render(){
    console.log("Parent - Render");
    return (
      <div>
        <h1>This page is about us</h1>
        <Profile name={"Piyush"}/>
      </div>
    );
  }
}

export default About;
/**
 * Parent constructor
 * Parent Render
 * Child Constructor
 * Child Render
 * Child ComponenetDidMount
 * Parent ComponenetDidMount
 * 
 */