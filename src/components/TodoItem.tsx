import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
	text: string;
	id: string;
}> = (props) => {
	const todosCtx = useContext(TodosContext);

	return (
		<li
			className={classes.item}
			onClick={() => todosCtx.removeTodo(props.id)}
		>
			{props.text}
		</li>
	);
};

export default TodoItem;
