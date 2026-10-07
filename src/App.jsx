import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import UserInfo from "./components/UserInfo/UserInfo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import TodoForm from "./components/TodoForm/TodoForm.jsx";

function App() {
    const age = 17;
    const name = "Kuba";

    const [todos, setTodos] = useState([
        "Nauczyc sie Reacta",
        "Zrobic zadanie domowe",
        "Powtorzyc JavaScript"
    ]);

    return (
        <>
            <Header />

            <UserInfo name={name} age={age} />

            <TodoForm />

            <TodoList todos={todos} />
        </>
    );
}

export default App;