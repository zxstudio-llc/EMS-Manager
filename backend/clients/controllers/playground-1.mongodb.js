/** @format */

// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("zxstudio");

// Create a new document in the collection.
db.getCollection("clients").insertOne({
  name: "NombreCliente",
  lastName: "ApellidoCliente",
  phone: "123456789",
  passport: "AB123456",
  email: "cliente@example.com",
  observations: "Observaciones sobre el cliente",
  requirements: "Requerimientos específicos",
  products: ["branding", "desarrollo web", "audiovisual"],
  queryType: "Consulta específica",
});
