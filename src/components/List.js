function List({ todoList, setTodoList }) {

  const deleteItem = (e) => {
    const id = e.target.getAttribute("data-id");
    let newTodoList = todoList.filter(todo => todo !== todoList[id])
    setTodoList(newTodoList);
  }

  const checked = (e) => {
    const id = e.target.getAttribute("data-id");

    let newItem = todoList.map(todo => {
      if(todo === todoList[id]) {
        return ({...todo, checked: e.target.checked})
      }

      return todo;
    })

    setTodoList(newItem);
  }

  return (
    <section className="main">
        <ul className="todo-list">
            {
              todoList.map((todo, i) => {
                return(
                  <li className={ todo.checked ? 'completed' : null } key={i}>
                      <div className="view">
                          <input className="toggle" type="checkbox" data-id={i} onChange={checked} defaultChecked={todo.checked} />
                          <label>{ todo.title }</label>
                          <button className="destroy" data-id={i} onClick={deleteItem}></button>
                      </div>
                  </li>
                )
              })
            }
        </ul>
    </section>
  )
}

export default List