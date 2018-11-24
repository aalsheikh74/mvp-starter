import React from 'react';

const MainMenu = (props) => (
  <div>
	  <div><h1>Home | About | List Item | Add Item | Search for Item | Login | Signup</h1></div>
	  <button className="btn" onClick={function(){console.log("home!")}}>Home </button>
	  <button className="btn" onClick={function(){console.log("About!")}}>About </button>
	  <button className="btn" onClick={function(){console.log("List Item!")}}>List Item </button>
	  <button className="btn" onClick={function(){console.log("Add Item!")}}>Add Item </button>
	  <button className="btn" onClick={function(){console.log("Search for Item!")}}>Search for Item </button>
	  <button className="btn" onClick={function(){console.log("Login!")}}>Login </button>
	  <button className="btn" onClick={function(){console.log("Signup!")}}>Signup </button>
	   
	  
  </div>
)

export default MainMenu;


