import React from 'react';
import {Text, View, Button, StyleSheet} from "react-native";
import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class Images extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('images.db')
  }
 
  static get tableName() {
    return 'images'
  }
 
  static get columnMapping() {
    return {
      fileName: { type: types.TEXT, not_null: true },
      imageFile: { type: types.IMAGE, not_null: true },
      isOwned: {  type: types.BOOLEAN }
      price: { type: types.NUMBER},
    }
  }
}