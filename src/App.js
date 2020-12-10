import React from 'react'
import "./App.css";
import  {photo} from "./Component/photo";
import {fullname} from "./Component/fullname";
import {adresse} from "./Component/adresse";

function App() {
  return (
    <div>
      <fullname />
      <adresse />
      <photo />
      </div>
  );}
  export default App;
