function generateCertificate(name, technology, level) {
  if (!name || !technology || !level) {
    return "Dados insuficientes para gerar o certificado.";
  }

  return {
    student: name,
    technology: technology,
    level: level,
    message: `Certificamos que ${name} concluiu a trilha de ${technology} no nível ${level}.`
  };
}

module.exports = { generateCertificate };