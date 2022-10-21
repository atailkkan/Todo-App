import './App.css';
import { useState } from "react";
import Footer from './components/Footer';
import List from './components/List';
import Add from './components/Add';

function App() {

  const [todoList, setTodoList] = useState([
    { title: "Lorem ipsum dolor sit amet", checked: false },
    { title: "Quisque fermentum augue lacus", checked: false },
    { title: "Nunc ullamcorper quis est", checked: false },
  ]);

  return (
    <div className="App">
      <section className="todoapp">
        <Add todoList={todoList} setTodoList={setTodoList} />
        <List todoList={todoList} setTodoList={setTodoList} />
        <Footer todoList={todoList} />
      </section>     
    </div>
  );
}

export default App;
