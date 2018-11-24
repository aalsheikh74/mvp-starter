import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import MainMenu from './components/MainMenu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      ren: 0,
    }

    this.pageRender = this.pageRender.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data,
          
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  pageRender() {
    console.log("pageID", 1)
   
  }

  render () {
    return (<div>
      
      <div>
        <div><h1>Home | About | List Item | Add Item | Search for Item | Login | Signup</h1></div>
        <button className="btn" onClick={function(){this.setState({ren: 2}); console.log("home!", this.ren)}}>Home </button>
        <button className="btn" onClick={function(){this.pageRender}}>About </button>
        <button className="btn" onClick={function(){console.log("List Item!")}}>List Item </button>
        <button className="btn" onClick={function(){console.log("Add Item!")}}>Add Item </button>
        <button className="btn" onClick={function(){console.log("Search for Item!")}}>Search for Item </button>
        <button className="btn" onClick={function(){console.log("Login!")}}>Login </button>
        <button className="btn" onClick={function(){console.log("Signup!")}}>Signup </button>  
      </div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));