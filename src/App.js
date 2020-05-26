import React, {useState} from 'react';
import './styles.css';


const App = () => {

	const todosInitState = [
		{
			title: 'item 1'
		},
		{
			title: 'item 2'
		},
		{
			title: 'item 3'
		}
	];

	const [todos, setTodos] = useState(todosInitState);
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		handleAddTodo(value);
		setValue('');
	};

	const handleAddTodo = (text) => {
		const newTodos = [...todos, {title: text}];
		setTodos(newTodos);

	};

	const handleDelete = (title) => {
		const newTodos = todos.filter(todo => todo.title != title);
		setTodos(newTodos);
	};

	return (
		<div className='wrapper'>
			<h1>Todoooooooo app</h1>

			<h3>Was ich machen werde wenn die kontaktsperre aufgehoben wird:</h3>

			<ul>
				{
					todos.length > 1 ?
						todos.map(todo => {
							return (
								<li key={todo.title}>
									{todo.title}
									<button onClick={() => {
										handleDelete(todo.title);
									}}>Delete
									</button>
								</li>
							);
						}) : null
				}
			</ul>

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className='input'
					value={value}
					placeholder='Add Todo...'
					onChange={e => setValue(e.target.value)}
				/>
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};
export default App;

