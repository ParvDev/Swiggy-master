import { Component } from "react";
import React from "react";

//Defining a Class
class Profile extends Component{
    constructor(props){
        super(props)
        //this how we define State Variable in Class Based Component
        this.state={
            count: 0,
            count2: 0,
            userInfo : {
                name: "Dummy Username",
                location: "Dummy Location",
            },
        }
        console.log("Child Constructor");
    }

    //API calling using ASYNC
    async componentDidMount(){
        console.log("Child componentDidMount");
        const data = await fetch("https://api.github.com/users/Maverick-PS");
        
        const json = await data.json();

        //This peice of code will set the state variable
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    //It will update the setState everytime if we hit on count button like in functional component we just passed dependency array for this
    componentDidUpdate(prevProps, prevState){
        if(this.state.count != prevState.count){
            console.log("Child componentDidUpdate count 1");   
        }
        if(this.state.count2 != prevState.count2){
            console.log("Child componentDidUpdate count 2");
        }
    }

    //For cleaning up the mess when we move to another page
    componentWillUnmount(){
        console.log("Child componentwillUnMount");
    }


    render(){
        console.log("Child Render");

        //destructuring state variable
        const {count,count2} = this.state;
        return (
            <div>
                <h1>Profile</h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: 1,
                        count2: 2,
                    })
                }}>Count {this.state.count}</button>
            </div>
        );
    }
}
export default Profile;


/**
*Parent - constructor
    Parent - Render
        Child Constructor
        Child Render

        DOM is updating

        Child componentDidMount
        Parent - ComponentDidMount 
        API : {login: 'Maverick-PS', id: 77110363, node_id: 'MDQ6VXNlcjc3MTEwMzYz', avatar_url: 'https://avatars.githubusercontent.com/u/77110363?v=4', gravatar_id: '', …}
        Child Render
        Child ComponentWillUnMount
 * 
 * 
 */