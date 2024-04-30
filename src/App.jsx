// import { useState } from "react";
// export { store } from "./redux/store.js";
import "./App.css";
// import { store } from "./redux/store";
import Balance from "./components/Balance";
function App() {
  // console.log(store);
  return (
    <div>
      <h1>Redux</h1>
      <Balance />
    </div>
  );
}

export default App;
