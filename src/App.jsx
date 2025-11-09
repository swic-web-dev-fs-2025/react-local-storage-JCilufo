import { useLocalStorage } from "@uidotdev/usehooks"

import "./App.css";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []); // Tracks todo list
  const [input, setInput] = useLocalStorage("todoInput", ""); // Tracks textbox input value


  const addTodo = (text) => {
    const trimmed = (text || "").trim(); // Trim removes any whitespace. This will prevent adding empty todos
    if (!trimmed) return; // Return early if trimmed text is empty
    setTodos([...todos, { id: Date.now(), text: trimmed }]) // Date.now generates a unique id based on the current timestamp
  }

  return (
    <>
      <div>
      <h1>Todos</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") { // Check that Enter key is pressed
            addTodo(input); // Adds input value to list when Enter key is pressed
            setInput(""); // Clears textbox
          }
        }}
        placeholder="Add a todo..."
      />
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
