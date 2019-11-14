import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { observer, useQuery, $root } from 'startupjs'
import Todo from '../Todo'
import './index.styl'

export default observer(function Todos () {
  const [taskText, setTaskText] = useState('')
  const [todos = [], $todos] = useQuery('todos', {
    $sort: {
      createdAt: -1
    }
  })
  const [uncompleted] = useQuery('todos', {
    isDone: false,
    $count: true
    })
  const [total] = useQuery('todos', {
    $count: true
    })
  function addTask () {
    if (!taskText.length) return
    $todos.addNew(taskText)
    setTaskText('')
  }
  return pug`
    View.header
      Text.headerText Todos
    View.main
      TextInput.taskInput(placeholder="Create a new task" value=taskText onChangeText=text=>setTaskText(text))
      Button( title="Add task" onPress=addTask)
    View.counter
      Text Total tasks: #{total} 
      Text Uncompleted tasks: #{uncompleted} 
    each todo in todos.filter(Boolean)
      Todo(key=todo.id id=todo.id) 
  `
})
