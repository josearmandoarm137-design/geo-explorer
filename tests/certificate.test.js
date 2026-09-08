const { generateCertificate } = require("../commands/certificate");

const resultado = generateCertificate(
  "Jose Armando",
  "Python",
  "beginner"
);

console.log("=== TESTE DO CERTIFICADO ===");
console.log(resultado);