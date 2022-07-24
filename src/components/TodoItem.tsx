import { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
	const [removeTodo, setremoveTodo] = useState(false);

	return (
		<>
			{!removeTodo && (
				<li onClick={() => setremoveTodo(true)} className={styles["todos-item"]}>
					{props.text}
				</li>
			)}
		</>
	);
};

export default TodoItem;
