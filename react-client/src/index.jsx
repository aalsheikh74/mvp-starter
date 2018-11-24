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
      pageRender: 0,
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

  pageRender(e) {
    console.log("pageID", 1)
    console.log(e.target.value)
    this.setState({ren: 1});
  }

  render () {
    return (<div>
      
      <div>
        <div><h1>Home | About | List Item | Add Item | Search for Item | Login | Signup</h1></div>
        <button className="btn" value='0' onClick={this.pageRender  }>Home </button>
        <button className="btn" value='1' onClick={this.pageRender  }>About </button>
        <button className="btn" value='2' onClick={this.pageRender  }>List Item </button>
        <button className="btn" value='3' onClick={this.pageRender  }>Add Item </button>
        <button className="btn" value='4' onClick={this.pageRender  }>Search for Item </button>
        <button className="btn" value='5' onClick={this.pageRender  }>Login </button>
        <button className="btn" value='6' onClick={this.pageRender  }>Signup </button>  
      </div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));