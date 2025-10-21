import { useReducer, useState } from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./store";
import Counter from "./components/Counter";
import Users from "./components/Users";



function App() {
const [name,setName] = useState("sankar");
  return (
    <div className="App" >
      <Provider store={store}>
          <Counter />
          <Users />
      </Provider>
    </div>
  );
}

export default App;
