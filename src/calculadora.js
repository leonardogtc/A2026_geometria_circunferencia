// src/calculadora.js
import { colors, c, banner } from './colors.js';
import { desenharCircunferenciaDinamica } from './desenho.js';

/**
 * Formata números com até 4 casas decimais quando necessário,
 * trocando ponto por vírgula no estilo brasileiro.
 */
export function formatarNumero(num) {
  if (Number.isInteger(num)) return num.toString();
  const formatado = Number(num.toFixed(4)).toString();
  return formatado.replace('.', ',');
}

/**
 * Opções de Pi comumente usadas em sala de aula
 */
export const OPCOES_PI = {
  1: { nome: 'π ≈ 3,14 (Mais comum no Ensino Fundamental/Médio)', valor: 3.14 },
  2: { nome: 'π ≈ 3,14159 (Maior precisão)', valor: 3.141592653589793 },
  3: { nome: 'π ≈ 3 (Aproximação rápida às vezes pedida em questões)', valor: 3.0 },
};

/**
 * 1. Cálculos a partir do Raio (r)
 */
export function calcularPeloRaio(r, pi = 3.14, unidade = 'cm') {
  const d = Number((2 * r).toFixed(8));
  const cPerimetro = Number((2 * pi * r).toFixed(8));

  console.log(banner(`CÁLCULO A PARTIR DO RAIO (r = ${formatarNumero(r)} ${unidade})`));
  console.log(`${c.subtitle('📌 DADOS DE ENTRADA:')}`);
  console.log(`  • Raio (r): ${colors.bold}${formatarNumero(r)} ${unidade}${colors.reset}`);
  console.log(`  • Valor de π utilizado: ${colors.bold}${formatarNumero(pi)}${colors.reset}\n`);

  console.log(`${c.subtitle('1️⃣  CALCULANDO O DIÂMETRO (d):')}`);
  console.log(`   ${c.accent('Fórmula:')} ${c.formula('d = 2 · r')}`);
  console.log(`   ${c.dim('Explicação:')} O diâmetro é exatamente o dobro do raio.`);
  console.log(`   ${c.dim('Passo a passo:')} d = 2 · ${formatarNumero(r)}`);
  console.log(`   ${c.success('➜ Diâmetro (d) = ' + formatarNumero(d) + ' ' + unidade)}\n`);

  console.log(`${c.subtitle('2️⃣  CALCULANDO O PERÍMETRO / COMPRIMENTO (C):')}`);
  console.log(`   ${c.accent('Fórmula:')} ${c.formula('C = 2 · π · r')}  (ou  ${c.formula('C = π · d')})`);
  console.log(`   ${c.dim('Explicação:')} Uma volta inteira na circunferência equivale a multiplicar seu diâmetro por pi.`);
  console.log(`   ${c.dim('Passo a passo:')}`);
  console.log(`      C = 2 · ${formatarNumero(pi)} · ${formatarNumero(r)}`);
  console.log(`      C = ${formatarNumero(2 * pi)} · ${formatarNumero(r)}`);
  console.log(`   ${c.success('➜ Perímetro (C) = ' + formatarNumero(cPerimetro) + ' ' + unidade)}\n`);

  console.log(`${c.subtitle('✨ RESUMO PARA ANOTAR NO CADERNO:')}`);
  console.log(`  ┌────────────────────────────────────────────────────────┐`);
  console.log(`  │ Raio (r)       = ${formatarNumero(r).padEnd(10)} ${unidade.padEnd(4)}                             │`);
  console.log(`  │ Diâmetro (d)   = ${formatarNumero(d).padEnd(10)} ${unidade.padEnd(4)} (${colors.bold}dobro do raio${colors.reset})           │`);
  console.log(`  │ Perímetro (C)  = ${formatarNumero(cPerimetro).padEnd(10)} ${unidade.padEnd(4)} (${colors.bold}uma volta completa${colors.reset})     │`);
  console.log(`  └────────────────────────────────────────────────────────┘\n`);

  console.log(c.dim('Visualização aproximada no terminal:'));
  console.log(desenharCircunferenciaDinamica(Math.min(9, Math.max(5, Math.round(r)))));

  return { r, d, perimetro: cPerimetro, pi, unidade };
}

/**
 * 2. Cálculos a partir do Diâmetro (d)
 */
export function calcularPeloDiametro(d, pi = 3.14, unidade = 'cm') {
  const r = Number((d / 2).toFixed(8));
  const cPerimetro = Number((pi * d).toFixed(8));

  console.log(banner(`CÁLCULO A PARTIR DO DIÂMETRO (d = ${formatarNumero(d)} ${unidade})`));
  console.log(`${c.subtitle('📌 DADOS DE ENTRADA:')}`);
  console.log(`  • Diâmetro (d): ${colors.bold}${formatarNumero(d)} ${unidade}${colors.reset}`);
  console.log(`  • Valor de π utilizado: ${colors.bold}${formatarNumero(pi)}${colors.reset}\n`);

  console.log(`${c.subtitle('1️⃣  CALCULANDO O RAIO (r):')}`);
  console.log(`   ${c.accent('Fórmula:')} ${c.formula('r = d / 2')}`);
  console.log(`   ${c.dim('Explicação:')} O raio é sempre a metade do diâmetro.`);
  console.log(`   ${c.dim('Passo a passo:')} r = ${formatarNumero(d)} / 2`);
  console.log(`   ${c.success('➜ Raio (r) = ' + formatarNumero(r) + ' ' + unidade)}\n`);

  console.log(`${c.subtitle('2️⃣  CALCULANDO O PERÍMETRO / COMPRIMENTO (C):')}`);
  console.log(`   ${c.accent('Fórmula:')} ${c.formula('C = π · d')}`);
  console.log(`   ${c.dim('Passo a passo:')} C = ${formatarNumero(pi)} · ${formatarNumero(d)}`);
  console.log(`   ${c.success('➜ Perímetro (C) = ' + formatarNumero(cPerimetro) + ' ' + unidade)}\n`);

  console.log(`${c.subtitle('✨ RESUMO PARA ANOTAR NO CADERNO:')}`);
  console.log(`  ┌────────────────────────────────────────────────────────┐`);
  console.log(`  │ Raio (r)       = ${formatarNumero(r).padEnd(10)} ${unidade.padEnd(4)} (${colors.bold}metade do diâmetro${colors.reset})      │`);
  console.log(`  │ Diâmetro (d)   = ${formatarNumero(d).padEnd(10)} ${unidade.padEnd(4)}                             │`);
  console.log(`  │ Perímetro (C)  = ${formatarNumero(cPerimetro).padEnd(10)} ${unidade.padEnd(4)} (${colors.bold}uma volta completa${colors.reset})     │`);
  console.log(`  └────────────────────────────────────────────────────────┘\n`);

  return { r, d, perimetro: cPerimetro, pi, unidade };
}

/**
 * 3. Cálculos a partir do Perímetro / Comprimento (C)
 */
export function calcularPeloPerimetro(comprimento, pi = 3.14, unidade = 'cm') {
  const d = Number((comprimento / pi).toFixed(8));
  const r = Number((d / 2).toFixed(8));

  console.log(banner(`CÁLCULO A PARTIR DO PERÍMETRO (C = ${formatarNumero(comprimento)} ${unidade})`));
  console.log(`${c.subtitle('📌 DADOS DE ENTRADA:')}`);
  console.log(`  • Perímetro (C): ${colors.bold}${formatarNumero(comprimento)} ${unidade}${colors.reset}`);
  console.log(`  • Valor de π utilizado: ${colors.bold}${formatarNumero(pi)}${colors.reset}\n`);

  console.log(`${c.subtitle('1️⃣  CALCULANDO O DIÂMETRO (d):')}`);
  console.log(`   ${c.accent('Fórmula:')} Como ${c.formula('C = π · d')}, isolamos o d: ${c.formula('d = C / π')}`);
  console.log(`   ${c.dim('Passo a passo:')} d = ${formatarNumero(comprimento)} / ${formatarNumero(pi)}`);
  console.log(`   ${c.success('➜ Diâmetro (d) = ' + formatarNumero(d) + ' ' + unidade)}\n`);

  console.log(`${c.subtitle('2️⃣  CALCULANDO O RAIO (r):')}`);
  console.log(`   ${c.accent('Fórmula:')} ${c.formula('r = d / 2')}  (ou  ${c.formula('r = C / (2 · π)')})`);
  console.log(`   ${c.dim('Passo a passo:')} r = ${formatarNumero(d)} / 2`);
  console.log(`   ${c.success('➜ Raio (r) = ' + formatarNumero(r) + ' ' + unidade)}\n`);

  console.log(`${c.subtitle('✨ RESUMO PARA ANOTAR NO CADERNO:')}`);
  console.log(`  ┌────────────────────────────────────────────────────────┐`);
  console.log(`  │ Raio (r)       = ${formatarNumero(r).padEnd(10)} ${unidade.padEnd(4)}                             │`);
  console.log(`  │ Diâmetro (d)   = ${formatarNumero(d).padEnd(10)} ${unidade.padEnd(4)}                             │`);
  console.log(`  │ Perímetro (C)  = ${formatarNumero(comprimento).padEnd(10)} ${unidade.padEnd(4)}                             │`);
  console.log(`  └────────────────────────────────────────────────────────┘\n`);

  return { r, d, perimetro: comprimento, pi, unidade };
}
