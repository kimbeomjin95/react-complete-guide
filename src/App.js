import React, { Fragment }from 'react'
import Counter from "./components/Counter";
import "./components/Counter.module.css";
import Header from "./components/Header";
import "./components/Header.module.css";
import Auth from "./components/Auth";
import "./components/Auth.module.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter/>
    </Fragment>
  );
}

export default App;
