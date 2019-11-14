import Counter from './CounterModel'
import Todos from './TodosModel'

export default function (racer) {
  racer.orm('counters.*', Counter)
  racer.orm('todos', Todos)
}
