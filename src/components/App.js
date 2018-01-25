import React, { Component } from 'react';
import Header from './Header';

class App extends Component {

	state = {
		pageHeader: 'Naming Contests',
		contests: []
	};
	componentDidMount(){
		this.setState(
			contests: data.contests
		)};
	render() {
		return (
			<div className="text-center">
				<Header message={this.state.pageHeader} />
			</div> 
		)
	}
}

export default App;