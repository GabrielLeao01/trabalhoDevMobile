import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync("VrumTechDB.sqlite");

export default db;