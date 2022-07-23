import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const todos = [new Todo("TypeScript"), new Todo("React"), new Todo("Next Js")];
	return (
		<div className='App'>
			<Todos items={todos} />
		</div>
	);
}

export default App;
