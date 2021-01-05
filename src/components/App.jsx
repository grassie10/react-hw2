import React from "react";
import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header></Header>
      <Note></Note>
      <Footer></Footer>
    </div>
  );
}

export default App;