import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		setTodos((prevTodos) => {
			return prevTodos.concat(new Todo(todoText));
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} onRemoveTodo={removeTodoHandler} />
		</div>
	);
}

export default App;
