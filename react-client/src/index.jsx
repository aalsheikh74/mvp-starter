import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MainMenu from './components/MainMenu.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import List from './components/List.jsx';
import Add from './components/Add.jsx';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      pageRender: '0',
    }

    var that = 5;

    this.pageClick = this.pageClick.bind(this);
    this.pageRenderSet = this.pageRenderSet.bind(this);
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

  
  pageRenderSet(ee) {
    this.setState({pageRender: ee});
  }

  pageClick(e) {
    
    var ee = e.target.value;
    
    console.log("pageClick - pageID: ", ee);
    this.setState({pageRender: ee});
    console.log("this.state.pageRender: ", this.state.pageRender)
    //this.pageRenderSet(ee)
  }

  render () {
    return (
      <div>
        <div>
          <button className="btn" value='0' onClick={this.pageClick  }>Home </button>
          <button className="btn" value='1' onClick={this.pageClick  }>About </button>
          <button className="btn" value='2' onClick={this.pageClick  }>List Item </button>
          <button className="btn" value='3' onClick={this.pageClick  }>Add Item </button>
          <button className="btn" value='4' onClick={this.pageClick  }>Search for Item </button>
          <button className="btn" value='5' onClick={this.pageClick  }>Login </button>
          <button className="btn" value='6' onClick={this.pageClick  }>Signup </button>  
        </div>
        <div>
          <PageRender items={this.state.items} pageRender={this.state.pageRender}/>
        </div>
    </div>)
  }
}

function PageRender(props) {
    console.log("Props: ", props)
    var pageRender = props.pageRender;
    
    if (pageRender === '0') {
      return (
        <div>
          <Home />
        </div>
        )
    } else if (pageRender === '1') {
      return (
        <div>
          <About />
        </div>
        )
    } else if (pageRender === '2') {
      return (
          <div>
            <h1>Item List</h1>
            <List items={props.items}/>
          </div>
        )
    } else if (pageRender === '3') {
      return (
        <div>
          <Add />
        </div>
        )
    } else if (pageRender === '4') {
      return (
        <div>
          <Search />
        </div>
        )
    } else if (pageRender === '5') {
      return (
        <div>
          <Login />
        </div>
        )
    } else if (pageRender === '6') {
      return (
        <div>
          <Signup />
        </div>
        )
    }
    return (
      <div>
        <Home />
      </div>
    )

  }
///////////////



ReactDOM.render(<App />, document.getElementById('app'));