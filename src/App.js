import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./router/AppRouter";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
