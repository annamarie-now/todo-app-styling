import React, {useState} from 'react';
import Todos from './data/todos'
import {Button, Typography, Container, Checkbox, FormControl} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import "./materialUI.css";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const App = () => {
    const [todos, setTodos] = useState(Todos);
    const [value, setValue] = useState('');
    const classes = useStyles();

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
        <Container
            className="container"
            maxWidth='sm'>
            <Typography
                className="h1"
                variant='h1'>
                Todo List
            </Typography>
            <Typography
                className="h3"
                variant='h4'>MaterialUi styling</Typography>
            {
                todos.map(todo => {
                    return (
                        <Table component={Paper}>
                            <TableBody className={classes.table} aria-label="customized table">
                                <TableRow>
                                    <TableCell
                                        width="30%">
                                        <Checkbox id={todo.title}
                                                  checked={todo.isCompleted} onChange={() => {
                                            handleCompleted(todo.title)
                                        }}/> </TableCell>
                                    <TableCell
                                        width="30%"
                                        key={todo.title}>{todo.title}</TableCell>
                                    <TableCell
                                        width="30%">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon/>}
                                            onClick={() => {
                                                handleDelete(todo.title);
                                            }}
                                        >
                                            Delete
                                        </Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    );
                })
            }
            <form className="addTodoContainer" onSubmit={handleSubmit}>
                <div>
                    <TextField
                        onSubmit={handleSubmit}
                        className="addTodoInput"
                        label="Add todo"
                        id="outlined-size-small"
                        defaultValue=""
                        variant="outlined"
                        size="small"
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        className="addButton"
                        size="large"
                        type="submit"
                    ><AddIcon/>
                    </Button></div>
            </form>

        </Container>
    );
};
export default App;