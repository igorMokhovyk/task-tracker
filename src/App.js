import React from 'react';
import HeaderPart from "./components/HeaderPart";
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="container">
      <HeaderPart/>
      <Tasks/>
    </div>
  );
}

export default App;
