import * as  SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class MarketItem extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('marketitems.db')
    }

    static get tableName() {
        return 'marketitems'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true },
            name: { type: types.TEXT, not_null: true },
            uri: { type: types.TEXT },
            cost: { type: types.INTEGER},
            category: { type: types.TEXT }
        }
    }
}
