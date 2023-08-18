import './app.scss';
import { Switch, Route } from "react-router-dom";
import Account from './Account';
import FreeComponent from './FreeComponent';
import AuthComponent from './AuthComponent';
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
	return (
		<div className="app">
			<section id="navigation">
				<a href="/">Home</a>
				<a href="/free">Free Component</a>
				<a href="/auth">Auth Component</a>
			</section>
			<Switch>
				<Route exact path="/" component={Account} />
				<Route exact path="/free" component={FreeComponent} />
				<ProtectedRoutes path="/auth" component={AuthComponent} />
			</Switch>
		</div>
	);
}

export default App;
