import React, {useState} from 'react';
import Todos from './data/todos'
import './styles.css';

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
		<div className='wrapper'>
			<h1>Todoooooooo app</h1>

			<h3>Was ich machen werde wenn die kontaktsperre aufgehoben wird:</h3>

			<ul>
				{
						todos.map(todo => {
							return (
								<li key={todo.title}>
									<input type="checkbox" id={todo.title} checked={todo.isCompleted} onChange={() => {handleCompleted(todo.title)}}/>
									<label htmlFor={todo.title} className='todo-title'>{todo.title}</label>
									<button className='button' onClick={() => {
										handleDelete(todo.title);
									}}>Delete
									</button>
								</li>
							);
						})
				}
			</ul>

			<form onSubmit={handleSubmit} className='form'>
				<input
					type='text'
					className='input'
					value={value}
					placeholder='Add Todo...'
					onChange={e => setValue(e.target.value)}
				/>
				<button type='submit' className='button'>Add</button>
			</form>
		</div>
	);
};
export default App;