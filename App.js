import { BASE_URL } from '@env'
import init from 'startupjs/init'
import orm from './model'
import React from 'react'
import {View, Text} from 'react-native'
import {observer} from 'startupjs'
import Todos from './components/Todos'
import './App.styl'

init({ baseUrl: BASE_URL, orm })

export default observer(function App() {
  return pug`
    Todos
  `
})