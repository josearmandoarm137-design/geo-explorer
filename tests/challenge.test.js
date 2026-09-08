const { getChallenge } = require("../commands/challenge");

const resultado = getChallenge("Python", "beginner");

console.log("=== TESTE DO CHALLENGE ===");
console.log(resultado);