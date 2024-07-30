import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function MyApp() {
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <p>Chai aur para</p>
//     </>
//   );
// }

// const ReactElement = {
//   type: "a",
//   props: { href: "https://www.google.com/", target: "_blank" },
//   children: "Click me to visit google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

const Username = " Chai aur React";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Visit here",
  Username
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
