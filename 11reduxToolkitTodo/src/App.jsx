import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./index.css";

// Importance of using two libraries:-
// Jab redux aaya tha to uske set-up me thoda zyada time lagta tha compared to contex api and debugging karne me bhi problem aa rhi thi. Tab developers ne redux-toolkit introduce kiya jisme set-up or debugging easy ho gya kuchh redux functions ke dawara, isliye redux use karne ke liye ye dono libraries install karna jaruri hai.

function App() {
  return (
    <div className="min-h-screen w-full bg-black pt-12">
      <h1 className="text-3xl font-bold text-white text-center">
        React Redux Toolkit!
        <AddTodo />
        <TodoItem />
      </h1>
    </div>
  );
}

export default App;
