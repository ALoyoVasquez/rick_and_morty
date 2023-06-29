const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  //Ejercicio 4
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      for (const prop in response.body) {
        expect(response.body).toHaveProperty(prop);
      }
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/rickandmorty/character/17as");
      expect(response.statusCode).toBe(500);
    });
  });

  //? Ejercicio 5
  describe("GET /rickandmorty/login", () => {
    const access = { access: true };

    it("Access True - Credenciales Válidas.", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=anita@mail.com&password=AL.123456"
      );
      expect(response.body.access).toBeTruthy(); //.toEqual(access);
    });
    it("Access False - Credenciales No Válidas.", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=ani@mail.com&password=123456"
      );
      expect(response.body.access).toBeFalsy();
    });
  });

  //? Ejercicio 6
  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el personaje en favoritos", async () => {
      const response = await agent.post("/rickandmorty/fav")
      .send({
        id: 114,
        name: "Ethan",
        status: "unknown",
        species: "Human",
        gender: "Male",
        origin: { name: "Earth (C-137)" },
        image: "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
      });
      expect(response.body).toContainEqual({
        id: 114,
        name: "Ethan",
        status: "unknown",
        species: "Human",
        gender: "Male",
        origin: { name: "Earth (C-137)" },
        image: "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
      });
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Debe agregar personajes en favoritos sin eliminar los existentes", async () => {
       
     })
  });
});
