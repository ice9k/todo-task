import { BaseModel } from 'startupjs/orm'

export default class TodosModel extends BaseModel {
  async addNew (taskText) {
    const $todos = this.scope('todos')
    const id = this.id()
    await $todos.addAsync({  
      text: taskText, 
      isDone: false, 
      createdAt: Date.now() 
    })
    return id
  }
}