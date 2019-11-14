import Counter from './CounterModel'
import Todos from './TodosModel'
import Todo from './TodoModel'

export default function (racer) {
  racer.orm('counters.*', Counter)
  racer.orm('todos', Todos)
  racer.orm('todos.*', Todo)
}
