//Style

//Components
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import Login from "./components/Login_SingOut/Login";
import Navbar from "./components/Navbar/Navbar";
import Items from "./components/Items/Items";
import Edit_List from "./components/Lists/Edit_List/Edit_List";
//Libraries
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import reducers from "./reducers";

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

const App = () => {
	const persistConfig = {
		key: "root",
		storage,
	};
	const persistedReducer = persistReducer(persistConfig, reducers);
	const store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Redirect to="/login" />
							<Header />
							<Lists />
						</Route>
						<Route path="/home">
							<Navbar />
							<Header />
							<HomePage />
						</Route>
						<Route path="/User/Lists/listName">
							<Navbar />
							<Header />
							<Lists />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/items">
							<Navbar />
							<Header />
							<Items />
						</Route>
						<Route path="/edit">
							<Navbar />
							<Header />
							<Edit_List />
						</Route>
					</Switch>
				</Router>
			</PersistGate>
		</Provider>
	);
};

export default App;
