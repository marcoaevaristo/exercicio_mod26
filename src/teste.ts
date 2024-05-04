// Função de multiplicação que recebe dois números e retorna a multiplicação deles
function multiplicar(a: number, b: number): number {
    return a * b;
  }
  
  // Função de saudação que recebe um nome e retorna a saudação "Olá " + nome
  function saudar(nome: string): string {
    return `Olá ${nome}`;
  }
  
  // Exemplos de uso
  const resultadoMultiplicacao = multiplicar(3, 4); // 12
  const saudacao = saudar("Pedro"); // "Olá Pedro"
  
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);
  console.log("Saudação:", saudacao);