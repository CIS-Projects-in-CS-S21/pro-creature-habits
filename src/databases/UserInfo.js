import React from 'react';
import {Text, View, Button, StyleSheet} from "react-native";
import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class UserInfo extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('userinfo.db')
  }
 
  static get tableName() {
    return 'userinfo'
  }
 
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      username: { type: types.TEXT, not_null: true },
      password: { type: types.TEXT, not_null: true },
      email: {  type: types.TEXT},
      coinBalance: { type: types.INTEGER}
    }
  }
}
