import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Legal from "./components/Legal";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact component={LandingPage} />
				<Route path="/home" exact component={Homepage} />
				<Route path="/mentions-legales" exact component={Legal} />
			</Router>
		</div>
	);
}

export default App;
