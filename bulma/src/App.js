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
		<div className="has-text-centered mx-4 my-3">
			<h1 className="title is-1">To-do app</h1>

			<h3 className="subtitle">Bulma styling</h3>
			<div className="card table">
				<div className="tbody">

				{
						todos.map(todo => {
							return (
								<tr key={todo.title} className="columns mx-1">
									<td className="column checkbox"><input class="checkbox" type="checkbox" id={todo.title} checked={todo.isCompleted} onChange={() => {handleCompleted(todo.title)}}/></td>
									<td className="column">
										<label htmlFor={todo.title} className="label">{todo.title}</label></td>
										<td className="column"><button className="button is-primary has-text-weight-bold" onClick={() => {
										handleDelete(todo.title);
									}}>Delete
									</button></td>
								</tr>
							);
						})
				}
						</div></div>
			<form onSubmit={handleSubmit} className="mt-5 form field has-addons">
				<input
					className="input"
					type='text'
					value={value}
					placeholder='Add Todo...'
					onChange={e => setValue(e.target.value)}
				/>
				<button type="submit" className="button is-info" >Add</button>
			</form>
</div>
	);
};
export default App;