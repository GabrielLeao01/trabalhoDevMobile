import db from "./SQLiteDatabase";

export type carrosUsuario = {
  carro_usuario_id?: number;
  usuario_id?: number; 
  carro_id?: number;
  quilometragem: number;
};

export default class carrosUsuarioRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(
      `CREATE TABLE IF NOT EXISTS CarrosUsuario(
        carro_usuario_id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER,
        carro_id INTEGER,
        quilometragem INTEGER
      );`
    );
  }

  public async down() {
    await db.runAsync("DROP TABLE CarrosUsuario;");
  }

  public async create(carrosUsuario: carrosUsuario) {
    const result = await db.runAsync(
      "INSERT INTO CarrosUsuario (usuario_id, carro_id, quilometragem) VALUES (?, ?, ?);",
      [
        carrosUsuario.usuario_id ?? 0,
        carrosUsuario.carro_id ?? 0,
        carrosUsuario.quilometragem ?? 0
      ]
    );
    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<carrosUsuario>("SELECT * FROM CarrosUsuario;");
    return result;
  }

  public async deleteCarro(carro_usuario_id: number) {
    const result = await db.runAsync(
      "DELETE FROM CarrosUsuario WHERE carro_usuario_id = ?;",
      [carro_usuario_id]
    );
    return result.changes > 0;
  }
  public async updateQuilometragem(carro_usuario_id: number, quilometragem: number) {
    const result = await db.runAsync(
      "UPDATE CarrosUsuario SET quilometragem = ? WHERE carro_usuario_id = ?;",
      [quilometragem, carro_usuario_id]
    );
    return result.changes > 0;
  }
  public async allByUsuarioId(usuarioId: number) {
    const query = `
      SELECT 
        rel.carro_usuario_id AS id,
        c.marca,
        c.modelo,
        rel.quilometragem
      FROM CarrosUsuario rel
      JOIN carros c ON rel.carro_id = c.carro_id
      WHERE rel.usuario_id = ?
    `;
    const result = await db.getAllAsync(query, [usuarioId]);
    return result;
  }
}
