// src/quiz.js
import { colors, c, banner } from './colors.js';

export const questoes = [
  {
    pergunta: 'O que é o RAIO de uma circunferência?',
    opcoes: [
      'A distância que vai de uma borda à outra passando pelo centro',
      'O segmento que liga o CENTRO a qualquer ponto da borda',
      'A medida de uma volta inteira na circunferência',
      'Qualquer reta que corte a circunferência por fora',
    ],
    respostaCorreta: 1,
    explicacao: 'O Raio (r) sempre parte do Centro (O) e vai até qualquer ponto da borda. Todos os raios têm a mesma medida!',
  },
  {
    pergunta: 'Qual é a relação matemática entre o DIÂMETRO (d) e o RAIO (r)?',
    opcoes: [
      'O diâmetro é a metade do raio (d = r / 2)',
      'O diâmetro é o dobro do raio (d = 2 · r)',
      'O diâmetro é sempre igual ao raio (d = r)',
      'O diâmetro é o raio elevado ao quadrado (d = r²)',
    ],
    respostaCorreta: 1,
    explicacao: 'O diâmetro atravessa a circunferência passando pelo centro, sendo formado por dois raios alinhados: d = 2 · r.',
  },
  {
    pergunta: 'O que define uma CORDA em uma circunferência?',
    opcoes: [
      'É qualquer segmento de reta que liga dois pontos da circunferência',
      'É obrigatoriamente uma reta que passa pelo centro',
      'É o ponto fixo no meio da circunferência',
      'É a medida do contorno da circunferência',
    ],
    respostaCorreta: 0,
    explicacao: 'Uma corda é qualquer segmento que une dois pontos da circunferência. Ela não precisa passar pelo centro!',
  },
  {
    pergunta: 'O DIÂMETRO pode ser considerado uma corda?',
    opcoes: [
      'Não, cordas e diâmetros são coisas totalmente diferentes',
      'Sim! Inclusive, o diâmetro é a MAIOR corda possível da circunferência',
      'Sim, mas apenas se o raio for menor que 5 cm',
      'Não, porque cordas não podem passar pelo centro',
    ],
    respostaCorreta: 1,
    explicacao: 'Como o diâmetro liga dois pontos da circunferência, ele é uma corda. E como passa pelo centro, é a maior corda que cabe nela!',
  },
  {
    pergunta: 'Uma roda de bicicleta tem raio de 35 cm. Qual é o seu DIÂMETRO?',
    opcoes: [
      '17,5 cm',
      '35 cm',
      '70 cm',
      '105 cm',
    ],
    respostaCorreta: 2,
    explicacao: 'Como d = 2 · r, temos d = 2 × 35 cm = 70 cm!',
  },
  {
    pergunta: 'Uma tampa redonda de panela tem diâmetro de 24 cm. Qual é o seu RAIO?',
    opcoes: [
      '48 cm',
      '12 cm',
      '6 cm',
      '24 cm',
    ],
    respostaCorreta: 1,
    explicacao: 'O raio é a metade do diâmetro: r = d / 2 = 24 / 2 = 12 cm!',
  },
  {
    pergunta: 'Se uma pista circular tem raio de 10 metros, quanto mede o seu PERÍMETRO (uma volta)? (Considere π = 3,14)',
    opcoes: [
      '31,4 metros',
      '62,8 metros',
      '314 metros',
      '20 metros',
    ],
    respostaCorreta: 1,
    explicacao: 'A fórmula é C = 2 · π · r. Logo: C = 2 × 3,14 × 10 = 6,28 × 10 = 62,8 metros!',
  },
];

export async function iniciarQuiz(perguntar) {
  console.log(banner('DESAFIO DA ALUNA: QUIZ DA CIRCUNFERÊNCIA'));
  console.log(`${c.subtitle('Vamos testar o que você aprendeu com perguntas rápidas!')}\n`);

  let acertos = 0;
  const total = questoes.length;

  for (let i = 0; i < total; i++) {
    const q = questoes[i];
    console.log(`\n${colors.bold}${colors.brightCyan}Questão ${i + 1} de ${total}:${colors.reset}`);
    console.log(`${colors.bold}${q.pergunta}${colors.reset}\n`);

    q.opcoes.forEach((opcao, idx) => {
      const letra = String.fromCharCode(65 + idx); // A, B, C, D
      console.log(`  ${c.accent(`[${letra}]`)} ${opcao}`);
    });

    let respostaValida = false;
    let escolhaIndex = -1;

    while (!respostaValida) {
      const entrada = (await perguntar(`\n${c.subtitle('Sua resposta (A, B, C ou D): ')}`)).trim().toUpperCase();

      if (['A', 'B', 'C', 'D'].includes(entrada)) {
        escolhaIndex = entrada.charCodeAt(0) - 65;
        respostaValida = true;
      } else {
        console.log(c.error('⚠️ Por favor, digite apenas a letra da opção (A, B, C ou D).'));
      }
    }

    if (escolhaIndex === q.respostaCorreta) {
      acertos++;
      console.log(`\n${c.success('🎉 PARABÉNS, VOCÊ ACERTOU!')}`);
    } else {
      const letraCerta = String.fromCharCode(65 + q.respostaCorreta);
      console.log(`\n${c.warn(`Quase lá! A resposta correta era a alternativa [${letraCerta}].`)}`);
    }

    console.log(`${c.dim('💡 Explicação:')} ${q.explicacao}`);
    console.log(colors.dim('─'.repeat(60)));
  }

  // Resultado final
  console.log(banner('RESULTADO DO DESAFIO'));
  const aproveitamento = Math.round((acertos / total) * 100);
  console.log(`Você acertou ${colors.bold}${acertos}${colors.reset} de ${colors.bold}${total}${colors.reset} questões (${aproveitamento}% de acertos)!\n`);

  if (acertos === total) {
    console.log(`${c.highlight('🌟 DESEMPENHO PERFEITO! Parabéns, você dominou completamente a circunferência!')}`);
  } else if (acertos >= Math.ceil(total * 0.7)) {
    console.log(`${c.success('👏 MUITO BEM! Você compreendeu muito bem os conceitos!')}`);
  } else {
    console.log(`${c.warn('💪 BOM ESFORÇO! Revise a seção de teoria no menu e tente novamente, você consegue!')}`);
  }

  console.log();
}
