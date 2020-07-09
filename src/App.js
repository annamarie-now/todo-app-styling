import React, {useState} from 'react';
import Todos from './data/todos'
//import './styles.css';
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
			todos.map(todo => todo.title === title ? { title: todo.title, isCompleted: !todo.isCompleted } : todo ))
	}

	const handleDelete = (title) => {
		const newTodos = todos.filter(todo => todo.title != title);
		setTodos(newTodos);
	};
	console.log(todos);
	return (
		<div className='wrapper' class="container mx-auto px-auto">
			<h1>To-do app</h1>

			<h3>Styling</h3>

			<ul>
				{
						todos.map(todo => {
							return (
								<li key={todo.title} class="todoListItems">
									<input type="checkbox" id={todo.title} checked={todo.isCompleted} onChange={() => {handleCompleted(todo.title)}}/>
									<label htmlFor={todo.title} className='todo-title' class="todoTitle">{todo.title}</label>
									<button className='btn' class="btn" onClick={() => {
										handleDelete(todo.title);
									}}>Delete
									</button>
								</li>

							);
						})
				}
			</ul>

			<form onSubmit={handleSubmit} className='form' class="form">
				<input
					type='text'
					className='input'
					value={value}
					placeholder='Add Todo...'
					onChange={e => setValue(e.target.value)}
				/>
				<button type='submit' className='button' class="bg-blue-300 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded">Add</button>
			</form>
		</div>
	);
};
export default App;