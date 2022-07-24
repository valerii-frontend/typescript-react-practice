import { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
	const [removeTodo, setremoveTodo] = useState(false);

	const toggleHandler = () => setremoveTodo((prev) => !prev);

	return (
		<li onClick={toggleHandler} className={[styles["todos-item"], removeTodo ? styles.done : ""].join(" ")}>
			{props.text}
		</li>
	);
};

export default TodoItem;
