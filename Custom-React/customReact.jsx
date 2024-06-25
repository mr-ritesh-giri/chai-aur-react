function customRender(reactElement, root) {
  const domElement = document.createElement(reactElement);
  domElement.innerHtml = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);

  root.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: { href: "https://gogole.com", target: _blank },
  children: "Click me to visit google.",
};

const root = document.getElementById("root");

customRender(reactElement, root);
