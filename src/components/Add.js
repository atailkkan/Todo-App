function Add({ todoList, setTodoList }) {

  const addTodo = (e) => {
    e.preventDefault();
    let input = e.target.querySelector("input");
    setTodoList([...todoList, { title: input.value, checked: false }])
    input.value = '';
  }

  return (
    <header className="header">
        <h1>todos</h1>
        <form onSubmit={addTodo}>
            <input name="title" className="new-todo" placeholder="What needs to be done?" value={todoList.title} autoFocus />
        </form>
    </header>
  )
}

export default Add