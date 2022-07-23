import React, { useRef } from "react";

const NewTodo = () => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw error
			return;
		}
	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='text'>Todo Text</label>
			<input type='text' id='text' ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
