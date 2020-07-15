import React, {useState} from 'react';
import Todos from './data/todos'
import { Button, Typography, Container } from 'material-ui/core';

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

    return (
        <Container maxWidth='sm'>
                <Typography variant='h1' gutterBottom>
                    Todo List
                </Typography>
            <Typography variant='h3' gutterBottom>MaterialUi styling</Typography>
            </Container>

            {
                todos.map(todo => {
                    return (
                        <div className='columns is-mobile is-centered'>
                            <div className='column is-6'>
                                <div className='list'>
                                    <ul>
                                        <div class='list-item'>
                            <span class='tag is-white'>
                               <input className="checkbox" type="checkbox" id={todo.title}
                                      checked={todo.isCompleted} onChange={() => {
                                   handleCompleted(todo.title)
                               }}/>
                            </span>
                                            <li>
                                                {todo.title}
                                                <a className="tag is-delete is-danger" onClick={() => {
                                                    handleDelete(todo.title);
                                                }}></a>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div>
                <form onSubmit={handleSubmit} className="is-grouped field has-addons has-addons-centered">
                    <div className="control my-auto">
                        <input
                            className="input"
                            type='text'
                            value={value}
                            placeholder='Add Todo...'
                            onChange={e => setValue(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button is-info">Add</button>
                </form>
            </div>
        </Container>
    );
};
export default App;