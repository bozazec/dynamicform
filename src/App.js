import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {getFormData} from './dataSrvice'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		this.getData = this.getData.bind(this)
		this.getItems = this.getItems.bind(this)
	}

	componentDidMount() {
		this.getData()
	}

	async getData() {
		const data = await getFormData()
		this.setState({data})
	}

	getItems(item, index) {
		if (item.type === 'field') {
			return (<div key={item.dataKey + index}>
				<label>{item.title}</label>
				<input
					type={item.dataType}
					name={item.dataType}
					placeholder={item.autofill}
				/>
			</div>)
		} else if (item.items) {
			return <div>
				<h4>{item.title}</h4>
				<div className={item.style}>
					{item.items.map(this.getItems)}
				</div>
			</div>
		} else {
			return null
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<p>
						Dinamicka forma:
					</p>
					{this.state.data.map((item, i) => {
						return (<div key={`${item.type}-${i}`}>
							<div><h3>{item.title}</h3></div>
							{item.items.map(this.getItems)}
						</div>)
					})}
				</header>
			</div>
		);
	}
}

export default App;
