import db from "./SQLiteDatabase";
export type Usuario = {
  usuario_id?: number;
  email: string; 
  senha: string; 
};

class UsuarioRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(
      "CREATE TABLE IF NOT EXISTS Usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, senha TEXT);"
    );
  }

  public async down() {
    await db.runAsync("DROP TABLE Usuario;");
  }

  public async create(Usuario: Usuario) {
    const result = await db.runAsync(
      "INSERT INTO Usuario (email, senha) values (?, ?);",
      [Usuario.email, Usuario.senha]
    );
    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<Usuario>("SELECT * FROM Usuario;");
    return result;
  }
}

const usuarioRepository = new UsuarioRepository();
export default usuarioRepository;
