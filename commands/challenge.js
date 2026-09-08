const challenges = [
  {
    technology: "Python",
    level: "beginner",
    challenge: "Crie um programa que receba dois números e mostre a soma entre eles."
  },
  {
    technology: "JavaScript",
    level: "beginner",
    challenge: "Crie uma função que receba um nome e retorne uma mensagem de boas-vindas."
  },
  {
    technology: "Java",
    level: "intermediate",
    challenge: "Crie uma classe Aluno com nome e nota e um método para informar se o aluno foi aprovado."
  }
];

function getChallenge(technology, level) {
  const result = challenges.find(
    (item) =>
      item.technology.toLowerCase() === technology.toLowerCase() &&
      item.level.toLowerCase() === level.toLowerCase()
  );

  if (!result) {
    return "Desafio não encontrado.";
  }

  return result;
}

module.exports = { getChallenge };
