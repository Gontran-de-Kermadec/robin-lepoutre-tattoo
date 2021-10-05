import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/home" exact component={Homepage} />
				<Route path="/" exact component={LandingPage} />
			</Router>
		</div>
	);
}

export default App;
