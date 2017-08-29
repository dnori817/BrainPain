import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/Quiz" component={Quiz}/>
						<Route exact path="/Results" component={Results}/>
						<Route exact path="/Scores" component={Scores}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
