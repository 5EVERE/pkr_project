import React, { useState } from "react";
import Header from "./Components/Header";
import Item from "./Components/Item";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import LogForm from "./Components/LogForm"
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <React.Fragment>
      <Header setModal={setModal} />
      <Main />
      <Item></Item>
      <Cart
        isOpened={modal}
        title={"Modal Title"}
        onModalClose={() => setModal(false)}
      />
      <LogForm></LogForm>
    </React.Fragment>
  );
}

export default App;
