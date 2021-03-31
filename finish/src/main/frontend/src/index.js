import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import reducers from "./reducers";
import "./index.css";
import App from "./App";

//Justin: Still have to figure out how this redux-persist Works
//Redux-persist allows to store the redux store in local storage and then retrieve the information later
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

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
