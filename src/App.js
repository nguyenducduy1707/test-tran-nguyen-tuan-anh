import { Provider } from "react-redux";
import "./App.scss";
import store from "./config/store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
