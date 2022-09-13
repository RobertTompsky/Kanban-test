import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react'
import data from './mock-data.json'
import { BrowserRouter } from 'react-router-dom';
import { LIST_TYPES, LIST_COPY } from './components/constData/constData.js'

function App() {
  let tasks = JSON.parse(window.localStorage.getItem('todo'))
  tasks = tasks ? tasks : []
  const [todo, setToDo] = useState(tasks)
  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(todo))
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main todo={todo} setToDo={setToDo}/>
        <Footer todo={todo}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
