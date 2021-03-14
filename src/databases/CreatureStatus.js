import React from 'react';
import {Text, View, Button, StyleSheet} from "react-native";
import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class CreatureStatus extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('creaturestatus.db')
  }
 
  static get tableName() {
    return 'creaturestatus'
  }
 
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT},
      health: { type: types.INTEGER},
      hunger: { type: types.INTEGER},
      hygiene: { type: types.INTEGER},
      fun: { type: types.INTEGER},
      isLow: { type: types.BOOLEAN},
    }
  }
}