import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';


        const TodoItems = ({ todoItems, onDeleteClick }) => {
            return (
                <div className={styles.itemscontainer}>
                    {todoItems.map((item) => (
                        <TodoItem todoDate={item.date} todoName={item.name} key={item.id} onDelete={ onDeleteClick} />
                    ))}
                </div>
            );
        };
export default TodoItems;