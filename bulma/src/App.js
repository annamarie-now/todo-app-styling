import React, {useState} from 'react';
import Todos from './data/todos'
//import './styles.css';
import './bulma.scss';

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
        <div className='container'>
            <div>
                <h1 className='title has-text-centered'>
                    Todo List
                </h1>
                <h2 className="subtitle has-text-centered">Bulma styling</h2>
            </div>

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
        </div>
    );
};

/*
                    <div key={todo.title} className="list">
                        <ul>
                            <div className="list-item tags">
                                <input class="checkbox" type="checkbox" id={todo.title}
                                       checked={todo.isCompleted} onChange={() => {
                                    handleCompleted(todo.title)
                                }}/>
                                <li htmlFor={todo.title} className="label">{todo.title}</li>
                                <button className="button is-primary has-text-weight-bold" onClick={() => {
                                    handleDelete(todo.title);
                                }}>Delete
                                </button>
                            </div>
                        </ul>
                    </div>
                )
                    ;
                })
            }
        </div>
</div>
<section className="section">
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
</form>

<button type="submit" className="button is-info">Add</button></section>
</div>
);
};*/
export default App;