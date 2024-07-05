// import React from "react";
import "./App.css";
import Cards from "./Components/Cards";

const myObj = {
  username: "Ritesh",
  role: "MERN dev",
  city: "Shamli",
  Phone: 7078903800,
};

// const myArr = [1, 2, 3, 4, 5];

// console.log(myObj, myArr);

export function App() {
  return (
    <>
      <h1 className="bg-cyan-400 text-white font-bold text-6xl p-10">
        Ritesh Giri and his Team!
      </h1>
      <Cards someObj={myObj} />
    </>
  );
}

export default App;
