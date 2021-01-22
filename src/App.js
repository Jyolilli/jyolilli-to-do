import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Jyolilli's To Do List</h1>
            </header>
            <Form />
            <TodoList />
        </div>
    );
}

export default App;
