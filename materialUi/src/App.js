import React, {useState} from 'react';
import Todos from './data/todos'
import {Button, Typography, Container, Checkbox} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
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
        <Container maxWidth='sm'>
            <Typography variant='h1'>
                Todo List
            </Typography>
            <Typography variant='h3'>MaterialUi styling</Typography>

            {
                todos.map(todo => {
                    return (
                        <div>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">

                                    <TableRow>
                                        <TableCell>
                                            <Checkbox id={todo.title}
                                                      checked={todo.isCompleted} onChange={() => {
                                                handleCompleted(todo.title)
                                            }}/> </TableCell>
                                        <TableCell>{todo.title}</TableCell>
                                        <TableCell>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() => {
                                                handleDelete(todo.title);
                                            }}
                                        >
                                            Delete
                                        </Button></TableCell>
                                </TableRow>

                                </Table>
                            </TableContainer>
                </div>
                );
                })
            }
            <div>
                <TextField
                    className="addTodoInput"
                    id="outlined-read-only-input"
                    label="Add todo"
                    variant="outlined"
                    onChange={e => setValue(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="addButton"
                    type="submit"
                >
                    Add
                </Button>



            </div>

        </Container>
    );
};
export default App;