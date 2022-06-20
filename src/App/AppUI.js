import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { Modal } from "../Modal";


function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        deleteTodo,
        completeTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />


            <TodoList>
                {loading && <p>Estamos cargandoo</p>}
                {error && <p>desesperate error</p>}
                {(!loading && !searchedTodos.length) && <p>crea tu nuevo Todo</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

                   {!!openModal && (
                     <Modal>
                        <TodoForm />
                    </Modal>
                   )}

            <CreateTodoButton 
            setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI }