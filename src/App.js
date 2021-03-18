import React, { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm.jsx'
import Todolist from './components/Todolist.jsx'
import Header from './components/Header.jsx'
import StatusDisplay from './components/StatusDisplay.jsx'
import Filter from './components/Filter.jsx'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from './firebase'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
const App = () => {
  const [text, setText] = useState('')
  const [todolist, setTodolist] = useState([])
  const [totalCount, setTotalCount] = useState()
  const [completedCount, setCompletedCount] = useState(0)
  const [progressCount, setProgressCount] = useState(0)

  const [isActive, setIsActive] = useState({
    all: true,
    completed: false,
    progress: false,
  })
  const ref = firebase.firestore().collection('todos')


  const setActiveHandler = (e) => {

    if (e.target.name === 'all') {
      setIsActive({ all: true, completed: false, progress: false })
      ref.orderBy('num').onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setTodolist(items);
      });

      // if completed is active
    } else if (e.target.name === 'completed') {
      setIsActive({ all: false, completed: true, progress: false })
      ref.orderBy('num').onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().completed === true) {
            items.push(doc.data());
          }

        });
        setTodolist(items);
      });

      // if on progress is active
    } else if (e.target.name === 'progress') {
      setIsActive({ all: false, completed: false, progress: true })
      ref.orderBy('num').onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().completed === false) {
            items.push(doc.data());
          }

        });
        setTodolist(items);
      });

    }
  }
  const readData = () => {
    ref.orderBy('num').onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTodolist(items);
      setTotalCount(items.length)
    });
  }


  const addData = (e) => {
    e.preventDefault()
    const id = uuidv4()
    if (text === '') {
      alert('Input field cannot be empty.')
    } else {
      ref.doc(id).set({ id, text, num: todolist.length, completed: false }).catch(err => console.log(err))
      setText('')
    }

  }

  const editData = (item) => {
    ref
      .doc(item.id)
      .update({ ...item, completed: true })
      .catch((err) => {
        console.error(err);
      });
  }

  const deleteData = (item) => {

    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    readData()
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    let completedCounter = 0
    let onProgressCounter = 0
    todolist.forEach(item => {

      if (item.completed === true) {
        completedCounter++
      }
      if (item.completed === false) {
        onProgressCounter++
      }
    })
    setCompletedCount(completedCounter)
    setProgressCount(onProgressCounter)
  }, [todolist])
  return (
    <div>
      <Header />
      <StatusDisplay totalCount={totalCount} progressCount={progressCount} completedCount={completedCount} todolist={todolist} />
      <Filter isActive={isActive} setActiveHandler={setActiveHandler} />
      <Container>
        <TodoForm text={text} setText={setText} addData={addData} />
        <Todolist deleteData={deleteData} editData={editData} todolist={todolist} />
      </Container>
    </div>
  )
}

export default App
