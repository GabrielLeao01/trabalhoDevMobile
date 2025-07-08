import db from "./SQLiteDatabase";

export type carros = {
  carro_id?: number; 
  marca: string;
  modelo: string;
  ano: number; 
};

export default class carrosRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(
      `CREATE TABLE IF NOT EXISTS carros (
          carro_id INTEGER PRIMARY KEY AUTOINCREMENT,
          marca TEXT,
          modelo TEXT,
          ano INTEGER
      );`
    );
  }

  public async down() {
    await db.runAsync("DROP TABLE carros;");
  }

  public async create(carros: carros) {
    const result = await db.runAsync(
      "INSERT INTO carros (marca, modelo, ano) VALUES (?, ?, ?);",
      [
        carros.marca,
        carros.modelo,
        carros.ano,
      ]
    );
    return result.lastInsertRowId;
  }
  public async all(): Promise<carros[]> {
    const results = await db.getAllAsync<carros>("SELECT * FROM carros;");
    return results;
  }
}
