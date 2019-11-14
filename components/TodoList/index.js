import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { observer, useQuery, $root } from 'startupjs'
import Todo from '../Todo'
import './index.styl'

export default observer(function ToDoList () {
  const [taskText, setTaskText] = useState('')
  const [todos = [], $todos] = useQuery('todos', {
    $sort: {
      createdAt: -1
    }
  })
  if (!todos) return
  function addTask () {
    if (!taskText.length) return
    $todos.add({ text: taskText, isDone: false, createdAt: Date.now() })
    setTaskText('')
  }
  const existingToDos = todos.filter(todo => todo)
  const uncompleted = existingToDos.filter(todo => todo.isDone === false).length
  const total = existingToDos.length
  return pug`
    View.main
      TextInput.taskInput(placeholder="Create a new task" value=taskText onChangeText=text=>setTaskText(text))
      Button( title="Add task" onPress=addTask)
    View.counter
      Text Total tasks: #{total} 
      Text Uncompleted tasks: #{uncompleted} 
    each todo in existingToDos
      Todo(key=todo.id id=todo.id) 
  `
})
