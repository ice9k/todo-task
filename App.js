import { BASE_URL } from '@env'
import init from 'startupjs/init'
import orm from './model'
import React from 'react'
import {View, Text} from 'react-native'
import {observer} from 'startupjs'
import TodoList from './components/TodoList'
import './App.styl'

init({ baseUrl: BASE_URL, orm })

export default observer(function App() {
  return pug`
    View
      View.header
        Text.headerText Todo List
      TodoList
  `
})