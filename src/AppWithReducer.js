/*
import './App.css';
import React, {useReducer} from "react";
import {v1} from "uuid";
import {Todolist} from "./ToDolist/Todolist";
import {AddFormItem} from "./ToDolist/AddFormItem";
import MenuIcon from '@mui/icons-material/Delete';
import {AppBar,  Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todoListsReducer
} from "./ToDolist/State/todolists-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    tasksReducer
} from "./ToDolist/State/tasks-reducer";


function App() {

    let toDoList1 = v1();
    let toDoList2 = v1();
    let toDoList3 = v1();

    let [toDoLists, dispatchToDoListsReducer] = useReducer(todoListsReducer, [
        {id: toDoList1, title: "What to learn", filter: "all"},
        {id: toDoList2, title: "What to buy", filter: "all"},
        {id: toDoList3, title: "What to do", filter: "all"}
    ])
    let [tasksObj, dispatchTaskReducer] = useReducer(tasksReducer, {
        [toDoList1]: [
            {id: v1(), title: "Learn JS", isDone: true},
            {id: v1(), title: "Learn CSS", isDone: false},
            {id: v1(), title: "Learn Pattern", isDone: true},
        ],
        [toDoList2]: [
            {id: v1(), title: "milk", isDone: true},
            {id: v1(), title: "whater", isDone: false},
        ],
        [toDoList3]: [
            {id: v1(), title: "Run away", isDone: true},
            {id: v1(), title: "to read a books", isDone: false},
            {id: v1(), title: "Write a title of lesson", isDone: true},
        ],
    })

    function changeTaskStatus (taskId, isDone, toDoListId) {
        const action = changeTaskStatusAC(taskId, isDone, toDoListId)
        dispatchTaskReducer(action)

    }

    function changeTaskTitle (taskId, title, toDoListId) {
        const action = changeTaskTitleAC(taskId, title, toDoListId)
        dispatchTaskReducer(action)

    }

    function addNewTask (title, toDoListId ) {

        const action = addTaskAC(title, toDoListId)
        dispatchTaskReducer(action)

    }

    function removeTask(id, toDoListId) {

        const action = removeTaskAC(id, toDoListId)
        dispatchTaskReducer(action)

    }

    let removeToDoList = (toDoLIstId) => {
    const action = removeTodolistAC(toDoLIstId)
        dispatchToDoListsReducer(action)

        delete tasksObj[toDoLIstId]

    }

    let changeToDoListTitle = (toDoLIstId, newTitle) => {
const action = changeTodolistTitleAC(toDoLIstId, newTitle)
        dispatchToDoListsReducer(action)

        }



    function changeFilter(value, toDoListId) {
    const action = changeTodolistFilterAC(value, toDoListId)
        dispatchToDoListsReducer(action)


    }

    function addNewList(title) {
        const action = addTodolistAC(title)
        dispatchToDoListsReducer(action)
        dispatchTaskReducer(action)
    }

    return (
        <div className="App">

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>

                <Grid container>
                    <AddFormItem addItem={addNewList}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        toDoLists.map(tl => {

                            let tasksForToDoLists = tasksObj[tl.id];
                            if (tl.filter === "completed") {
                                tasksForToDoLists = tasksForToDoLists.filter(t => t.isDone === true)

                            }
                            if (tl.filter === "active") {
                                tasksForToDoLists = tasksForToDoLists.filter(t => t.isDone === false)
                            }

                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist title={tl.title}
                                              key={tl.id}
                                              id={tl.id}
                                              tasks={tasksForToDoLists}
                                              removeTask={removeTask}
                                              changeFilter={changeFilter}
                                              addNewTask={addNewTask}
                                              changeTaskStatus={changeTaskStatus}
                                              changeTaskTitle={changeTaskTitle}
                                              filter={tl.filter}
                                              removeToDoList={removeToDoList}
                                              changeToDoListTitle={changeToDoListTitle}
                                              newTitle={removeToDoList}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>

        </div>
    )

}

export default App;*/
