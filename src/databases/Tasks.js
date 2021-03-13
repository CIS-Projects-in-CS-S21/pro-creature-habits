import React from 'react';
import {Text, View, Button, StyleSheet} from "react-native";
import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class Tasks extends BaseModel {
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
      name: { type: types.TEXT, not_null: true },
      dueTime: { type: types.INTEGER, default: () => Date.now() }
      complete: { type: types.BOOLEAN},
    }
  }
}
