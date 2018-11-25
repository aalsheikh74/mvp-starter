import React from 'react';
import $ from 'jquery';

//import ListItem from './ListItem.jsx';

class Add extends React.Component {

	constructor(props) {
    super(props);
    
    this.state = { 
      Name: '',
      Type: '',
      Quantity: 0,
      ResData: {},
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
  }

	handleFieldChange(e) {
		console.log( e.target.value)

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
  	$.ajax({
	    type: 'POST',
	    url: '/items',
	    success: (data) => {
        this.setState({
          ResData: data,
        })
        this.render()
      },

	    data: this.state

  	})
  }

render() {
	return (
		<div>
		<div><h1>Add</h1></div>
		<div>
			<form method="post">
			<label>Name: </label> <input type="text" name="Name" value={this.state.Name} onChange={this.handleFieldChange}/>
			<br />
			<label>Type: </label> <input type="text" name="Type" value={this.state.Type} onChange={this.handleFieldChange} />
			<label>Quantity: </label> <input type="text" name="Quantity" value={this.state.Quantity} onChange={this.handleFieldChange} />
			<br /><br />
			<input type="submit" value="Submit" onClick={this.handleSubmit}/>
			</form>
		</div>
		<div>

		</div>
		</div>
		)
	}
}

export default Add;