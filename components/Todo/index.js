import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function ToDo ({ id }) {
  const [todo, $todo] = useDoc('todos', id)
  const [isEditing, setIsEditing] = useState()
  if (!todo) return
  const [inputText, setInputText] = useState(todo.text)
  const removeToDo = () => { $todo.del() }

  return pug`
    View.root
      if isEditing  
        TextInput.textInput(value=inputText onChangeText=text=>setInputText(text) autoFocus selectTextOnFocus onBlur=()=>{$todo.set('text', inputText); setIsEditing(false)})
      else
        TouchableOpacity(onLongPress=()=>{setIsEditing(true)} onPress=()=>{$todo.set('isDone', !todo.isDone)})
          View.toDoText
            if (todo.isDone) 
              Text.toDoText &#9745;
            else 
              Text.toDoText &#9744;
            Text.toDoText(styleName=todo.isDone? 'done' : '') #{todo.text}
            TouchableOpacity(onPress=removeToDo)
              View
                Text.toDoTextX &#128465;
  `
}
)
