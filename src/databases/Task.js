import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Task extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase('tasks.db')
  }

  static get tableName() {
    return 'tasks'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, not_null: true },
      due: {type: types.TEXT, default: ""},
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}
