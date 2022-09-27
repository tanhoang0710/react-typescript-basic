import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an errow;
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
