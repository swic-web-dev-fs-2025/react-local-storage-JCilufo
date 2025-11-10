import { useLocalStorage } from "@uidotdev/usehooks";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []); // Tracks todo list

  return (
    <main className="flex flex-col gap-4 bg-slate-900 text-white p-4 min-h-screen justify-center items-center">
      <h1 className="text-2xl uppercase tracking-wider font-black">Todos</h1>
      <input
        className="border p-2 rounded"
        type="text"
        id="todo-input"
        aria-label="Add Todo"
        onBlur={(e) => {
          setTodos([...todos, { id: Date.now(), text: e.target.value }]); // Adds input value to list on blur
          e.target.value = ""; // Clears textbox
        }}
      />
      <button className="bg-green-500 rounded px-2 py-4">Add Todo</button>
      <ul className="text-center">
        {todos.map(({ id, text }) => (
          <li
            key={id}
            className="border-b border-slate-600 py-2 last:border-b-0"
          >
            {text}
          </li> // Display each todo as a list item
        ))}
      </ul>
      <button onClick={() => setTodos([])}>Clear Todos</button>
      {""}
      {/* Button to clear all todos */}
    </main>
  );
}
