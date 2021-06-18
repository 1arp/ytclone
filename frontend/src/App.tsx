import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Upload } from "./pages/Upload";
import HomePage from "./pages/Home";
import VideoPage from "./pages/Videopage";
import { Subscriptions } from "./pages/Subscriptions";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function App() {
	return (
		<>
			<Navbar></Navbar>
			<div className="my-5">
				<Router>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/upload">
							<Upload />
						</Route>
						<Route exact path="/video/:id">
							<VideoPage />
						</Route>
						<Route exact path="/subscriptions">
							<Subscriptions />
						</Route>
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
