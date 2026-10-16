// src/index.js
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { colors, c, banner } from './colors.js';
import {
  exibirIntroducao,
  exibirCentro,
  exibirRaio,
  exibirDiametro,
  exibirCorda,
  exibirPerimetro,
  exibirQuadroResumo,
} from './teoria.js';
import {
  calcularPeloRaio,
  calcularPeloDiametro,
  calcularPeloPerimetro,
  OPCOES_PI,
} from './calculadora.js';
import { diagramaGeral, desenharCircunferenciaDinamica } from './desenho.js';
import { iniciarQuiz } from './quiz.js';

const rl = readline.createInterface({ input, output });

async function perguntar(msg) {
  return await rl.question(msg);
}

async function pausar() {
  await perguntar(c.dim('\n[Pressione ENTER para continuar...]'));
}

async function lerNumeroPositivo(msg) {
  while (true) {
    const entrada = (await perguntar(msg)).trim().replace(',', '.');
    const valor = parseFloat(entrada);
    if (!isNaN(valor) && valor > 0) {
      return valor;
    }
    console.log(c.error('⚠️ Por favor, digite um número positivo válido (maior que zero).'));
  }
}

async function selecionarPi() {
  console.log(`\n${c.subtitle('Qual valor de π (Pi) você gostaria de usar?')}`);
  console.log(`  1) ${OPCOES_PI[1].nome}`);
  console.log(`  2) ${OPCOES_PI[2].nome}`);
  console.log(`  3) ${OPCOES_PI[3].nome}`);

  while (true) {
    const resposta = (await perguntar(c.accent('Escolha uma opção [1, 2 ou 3] (padrão: 1): '))).trim();
    if (resposta === '' || resposta === '1') return OPCOES_PI[1].valor;
    if (resposta === '2') return OPCOES_PI[2].valor;
    if (resposta === '3') return OPCOES_PI[3].valor;
    console.log(c.error('Opção inválida. Digite 1, 2 ou 3.'));
  }
}

async function menuTeoria() {
  while (true) {
    console.clear();
    console.log(banner('MÓDULO DE TEORIA: APRENDENDO OS CONCEITOS'));
    console.log(`Escolha um tópico para estudar com a aluna:\n`);
    console.log(`  ${c.accent('1.')} Introdução: O que é Circunferência vs Círculo`);
    console.log(`  ${c.accent('2.')} O Centro da Circunferência (O)`);
    console.log(`  ${c.accent('3.')} O Raio (r)`);
    console.log(`  ${c.accent('4.')} O Diâmetro (d) e sua relação com o Raio`);
    console.log(`  ${c.accent('5.')} A Corda (e por que o diâmetro é a maior corda)`);
    console.log(`  ${c.accent('6.')} O Perímetro / Comprimento (C) e o número Pi (π)`);
    console.log(`  ${c.accent('7.')} 🌟 Aula Completa (todos os tópicos em sequência)`);
    console.log(`  ${c.accent('8.')} 📊 Quadro de Resumo Rápido`);
    console.log(`  ${c.accent('0.')} Voltar ao Menu Principal\n`);

    const opcao = (await perguntar(c.subtitle('Digite o número da opção desejada: '))).trim();

    console.clear();
    if (opcao === '1') {
      exibirIntroducao();
      await pausar();
    } else if (opcao === '2') {
      exibirCentro();
      await pausar();
    } else if (opcao === '3') {
      exibirRaio();
      await pausar();
    } else if (opcao === '4') {
      exibirDiametro();
      await pausar();
    } else if (opcao === '5') {
      exibirCorda();
      await pausar();
    } else if (opcao === '6') {
      exibirPerimetro();
      await pausar();
    } else if (opcao === '7') {
      exibirIntroducao();
      await pausar();
      console.clear();
      exibirCentro();
      await pausar();
      console.clear();
      exibirRaio();
      await pausar();
      console.clear();
      exibirDiametro();
      await pausar();
      console.clear();
      exibirCorda();
      await pausar();
      console.clear();
      exibirPerimetro();
      await pausar();
      console.clear();
      exibirQuadroResumo();
      await pausar();
    } else if (opcao === '8') {
      exibirQuadroResumo();
      await pausar();
    } else if (opcao === '0') {
      break;
    } else {
      console.log(c.error('Opção inválida! Escolha um número de 0 a 8.'));
      await pausar();
    }
  }
}

async function menuCalculadora() {
  while (true) {
    console.clear();
    console.log(banner('CALCULADORA DIDÁTICA DA CIRCUNFERÊNCIA'));
    console.log(`Qual informação você já tem em mãos?\n`);
    console.log(`  ${c.accent('1.')} Eu tenho o ${c.highlight('RAIO (r)')}  ➜ Calcular Diâmetro e Perímetro`);
    console.log(`  ${c.accent('2.')} Eu tenho o ${c.formula('DIÂMETRO (d)')}  ➜ Calcular Raio e Perímetro`);
    console.log(`  ${c.accent('3.')} Eu tenho o ${c.title('PERÍMETRO (C)')} ➜ Calcular Raio e Diâmetro`);
    console.log(`  ${c.accent('0.')} Voltar ao Menu Principal\n`);

    const opcao = (await perguntar(c.subtitle('Escolha uma opção: '))).trim();

    if (opcao === '0') break;

    if (opcao === '1') {
      console.log();
      const r = await lerNumeroPositivo(c.subtitle('Informe o valor do RAIO: '));
      const unidade = (await perguntar(c.dim('Unidade de medida (ex: cm, m, mm) [padrão: cm]: '))).trim() || 'cm';
      const pi = await selecionarPi();
      console.clear();
      calcularPeloRaio(r, pi, unidade);
      await pausar();
    } else if (opcao === '2') {
      console.log();
      const d = await lerNumeroPositivo(c.subtitle('Informe o valor do DIÂMETRO: '));
      const unidade = (await perguntar(c.dim('Unidade de medida (ex: cm, m, mm) [padrão: cm]: '))).trim() || 'cm';
      const pi = await selecionarPi();
      console.clear();
      calcularPeloDiametro(d, pi, unidade);
      await pausar();
    } else if (opcao === '3') {
      console.log();
      const comp = await lerNumeroPositivo(c.subtitle('Informe o valor do PERÍMETRO / COMPRIMENTO: '));
      const unidade = (await perguntar(c.dim('Unidade de medida (ex: cm, m, mm) [padrão: cm]: '))).trim() || 'cm';
      const pi = await selecionarPi();
      console.clear();
      calcularPeloPerimetro(comp, pi, unidade);
      await pausar();
    } else {
      console.log(c.error('Opção inválida! Escolha 1, 2, 3 ou 0.'));
      await pausar();
    }
  }
}

async function menuVisualizador() {
  while (true) {
    console.clear();
    console.log(banner('VISUALIZADOR GRÁFICO'));
    console.log(`  ${c.accent('1.')} Ver o diagrama esquemático completo (Centro, Raio, Diâmetro e Corda)`);
    console.log(`  ${c.accent('2.')} Gerar desenho dinâmico de circunferência`);
    console.log(`  ${c.accent('0.')} Voltar ao Menu Principal\n`);

    const opcao = (await perguntar(c.subtitle('Escolha uma opção: '))).trim();

    if (opcao === '0') break;

    console.clear();
    if (opcao === '1') {
      console.log(banner('DIAGRAMA COMPLETO DA CIRCUNFERÊNCIA'));
      console.log(diagramaGeral());
      await pausar();
    } else if (opcao === '2') {
      console.log(banner('GERADOR DINÂMICO DE CIRCUNFERÊNCIA'));
      const tamanho = await lerNumeroPositivo('Digite o tamanho do raio para o desenho (sugerido de 4 a 14): ');
      console.log(`\nCircunferência gerada com raio aproximado de ${tamanho} unidades:`);
      console.log(desenharCircunferenciaDinamica(tamanho));
      console.log(`Legenda: ${c.error('O')} = Centro, ${c.highlight('─')} = Raio, ${c.title('*')} = Borda (Circunferência)\n`);
      await pausar();
    } else {
      console.log(c.error('Opção inválida!'));
      await pausar();
    }
  }
}

async function main() {
  try {
    while (true) {
      console.clear();
      console.log(banner('ENSINO DE MATEMÁTICA: A CIRCUNFERÊNCIA'));
      console.log(`${c.subtitle('Olá, Professor(a)! Bem-vindo(a) ao ambiente de ensino interativo.')}`);
      console.log(`${c.dim('Aqui você pode ensinar os conceitos de forma visual, calcular e praticar com sua aluna.')}\n`);

      console.log(`  ${c.accent('1.')} 📖 ${colors.bold}Aprender Conceitos (Modo Teoria e Aula)${colors.reset}`);
      console.log(`     ${c.dim('Explicações claras de Centro, Raio, Diâmetro, Corda e Perímetro.')}\n`);

      console.log(`  ${c.accent('2.')} 🧮 ${colors.bold}Calculadora Didática (Passo a Passo)${colors.reset}`);
      console.log(`     ${c.dim('Calcule Diâmetro, Raio e Perímetro com fórmulas detalhadas.')}\n`);

      console.log(`  ${c.accent('3.')} 🎨 ${colors.bold}Visualizador Gráfico / Diagramas${colors.reset}`);
      console.log(`     ${c.dim('Veja diagramas ilustrativos de cada parte da circunferência.')}\n`);

      console.log(`  ${c.accent('4.')} 🎯 ${colors.bold}Desafio da Aluna (Quiz Interativo)${colors.reset}`);
      console.log(`     ${c.dim('Perguntas e exercícios de fixação com feedback imediato.')}\n`);

      console.log(`  ${c.accent('5.')} 🌐 ${colors.bold}Laboratório Visual no Navegador (Web interativo)${colors.reset}`);
      console.log(`     ${c.dim('Abra uma interface gráfica colorida com círculos e controles em tempo real.')}\n`);

      console.log(`  ${c.accent('0.')} 🚪 ${colors.bold}Sair do Programa${colors.reset}\n`);

      const opcao = (await perguntar(c.subtitle('Digite sua opção: '))).trim();

      if (opcao === '1') {
        await menuTeoria();
      } else if (opcao === '2') {
        await menuCalculadora();
      } else if (opcao === '3') {
        await menuVisualizador();
      } else if (opcao === '4') {
        console.clear();
        await iniciarQuiz(perguntar);
        await pausar();
      } else if (opcao === '5') {
        console.clear();
        console.log(banner('LABORATÓRIO VISUAL NO NAVEGADOR'));
        console.log(`${c.subtitle('Você pode abrir o laboratório interativo de duas formas:')}\n`);
        console.log(`  1. Diretamente pelo navegador abrindo o arquivo:`);
        console.log(`     ${colors.bold}${colors.brightCyan}visualizador.html${colors.reset}\n`);
        console.log(`  2. Ou iniciando o servidor web integrado com o comando:`);
        console.log(`     ${colors.bold}${colors.brightYellow}npm run web${colors.reset}   (depois acesse ${colors.brightCyan}http://localhost:3000${colors.reset})\n`);
        await pausar();
      } else if (opcao === '0') {
        console.log(c.success('\nObrigado por usar o programa de ensino! Bons estudos com sua aluna! 👋\n'));
        break;
      } else {
        console.log(c.error('Opção inválida! Digite uma opção válida.'));
        await pausar();
      }
    }
  } finally {
    rl.close();
  }
}

main();
