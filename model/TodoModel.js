import { BaseModel } from 'startupjs/orm'

export default class TodoModel extends BaseModel {
  async toggleStatus () {
    const isDone = this.get('isDone')
    await this.setAsync('isDone', !isDone)
  }
}
