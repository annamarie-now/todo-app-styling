import React, {useState} from 'react';
import Todos from './data/todos'
import './tailwind.css';

const App = () => {
    const [todos, setTodos] = useState(Todos);
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        handleAddTodo(value);
        setValue('');
    };

    const handleAddTodo = (text) => {
        const newTodos = [...todos, {title: text, isCompleted: false}];
        setTodos(newTodos);

    };

    const handleCompleted = (title) => {
        setTodos(
            todos.map(todo => todo.title === title ? {title: todo.title, isCompleted: !todo.isCompleted} : todo))
    }

    const handleDelete = (title) => {
        const newTodos = todos.filter(todo => todo.title != title);
        setTodos(newTodos);
    };
    console.log(todos);
    return (
        <div className="wrapper m-auto px-auto text-center">
            <h1 className="p-2 font-hairline text-5xl">To-do app</h1>
            <h3 className="italic font-hairline">Styling</h3>
            <ul className="w-1/2 mx-auto">
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.title} className="border-b border-gray-600 flex justify-between p-2">
                                <input
                                    className="mr-2 my-auto p-1 ease-in-out border border-gray-600 rounded-sm box-border"
                                    type="checkbox" id={todo.title}
                                    checked={todo.isCompleted}
                                    onChange={() => {
                                        handleCompleted(todo.title)
                                    }}/>
                                <label htmlFor={todo.title} className="p-1 font-hairline text-lg">{todo.title}</label>
                                <button className="btn" onClick={() => {
                                    handleDelete(todo.title);
                                }}>Delete
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
            <form onSubmit={handleSubmit} className="form mx-auto my-1 pt-1">
                <input
                    className="mr-2 my-auto p-1 ease-in-out border border-gray-600 rounded-sm box-border"
                    type='text'
                    value={value}
                    placeholder='Add Todo...'
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'
                        className="button bg-blue-300 hover:bg-blue-200 text-white py-2 px-4 rounded">Add
                </button>
            </form>
        </div>
    );
};
export default App;