import {useState} from 'react'
import TodoItem from '../TodoItem/TodoItem';
function TodoList() {
const [todos, setTodos] = useState([
        'Nauczyc sie Recta',
        'Zrobic zadanie domowe',
        'Powtorzyc javascript'
]);


return (
    <section>
        {todos.map((el,index) => (
            <TodoItem key={index} text={el}/>
        ))}
    </section>
);
}
export default TodoList;