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
			todos.map(todo => todo.title === title ? { title: todo.title, isCompleted: !todo.isCompleted } : todo ))
	}

	const handleDelete = (title) => {
		const newTodos = todos.filter(todo => todo.title != title);
		setTodos(newTodos);
	};
	console.log(todos);
	return (
		<div className="hero-body has-text-centered">
			<h1 className="title is-1">To-do app</h1>

			<h3 class="subtitle">Bulma styling</h3>

			<ul className="section card">
				{
						todos.map(todo => {
							return (
								<li key={todo.title} className="card-content columns">
									<div class="level-left level-item column"><input class="checkbox" type="checkbox" id={todo.title} checked={todo.isCompleted} onChange={() => {handleCompleted(todo.title)}}/></div>
									<div className="column"><label htmlFor={todo.title} className="label">{todo.title}</label></div>
										<div className="column"><button className="button is-danger has-text-weight-bold" onClick={() => {
										handleDelete(todo.title);
									}}>Delete
									</button></div>
								</li>

							);
						})
				}
			</ul>

			<form onSubmit={handleSubmit} className='form' class="mx-auto my-1 pt-1">
				<input
					class="input is-rounded"
					type='text'
					value={value}
					placeholder='Add Todo...'
					onChange={e => setValue(e.target.value)}
				/>
				<button type='submit' className='button' class="button">Add</button>
			</form>
		</div>
	);
};
export default App;