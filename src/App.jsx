import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import Quiz from "pages/Quiz";
import Results from "pages/Results";
import Scores from "pages/Scores";

import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
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
			</Provider>

		);
	}
}

export default App;
