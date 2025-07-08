import db from "./SQLiteDatabase";

export type manutencoes = {
    carro_id?: number; 
    quilometragem: number;
    prioridade: number;
    descricao: string; 
};

export default class manutencoesRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(
        `CREATE TABLE IF NOT EXISTS manutencoes (
            carro_id INTEGER,
            quilometragem TEXT,
            prioridade INTEGER,
            descricao TEXT,
            FOREIGN KEY (carro_id) REFERENCES Carro(carro_id)
        );`
    );
  }

  public async down() {
    await db.runAsync("DROP TABLE manutencoes;");
  }

  public async create(manutencoes: manutencoes) {
    const result = await db.runAsync(
      "INSERT INTO manutencoes (carro_id, quilometragem, prioridade, descricao) VALUES (?, ?, ?, ?);",
      [
        manutencoes.carro_id ?? null,
        manutencoes.quilometragem,
        manutencoes.prioridade,
        manutencoes.descricao
      ]
    );
    return result.lastInsertRowId;
  }
public async all(carro_usuario_id: number) {
  const result = await db.getAllAsync<manutencoes>(
    "SELECT man.carro_id,man.quilometragem,man.prioridade,man.descricao FROM manutencoes man JOIN CarrosUsuario caru on man.carro_id = caru.carro_id WHERE carro_usuario_id = ?;",
    [carro_usuario_id]
  );
  return result;
}

}