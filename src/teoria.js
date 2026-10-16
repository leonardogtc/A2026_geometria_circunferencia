// src/teoria.js
import { colors, c, banner } from './colors.js';
import { diagramaGeral, diagramaRaio, diagramaDiametro, diagramaCorda } from './desenho.js';

export function exibirIntroducao() {
  console.log(banner('AULA: O QUE É UMA CIRCUNFERÊNCIA?'));
  console.log(`
${c.subtitle('💡 Primeiro passo: Circunferência vs Círculo (Não confunda!)')}

Muitas pessoas acham que é a mesma coisa, mas veja a diferença:

  ${c.highlight('⭕ CIRCUNFERÊNCIA:')}
     É apenas a ${colors.bold}linha do contorno${colors.reset} (a borda curva fechada).
     ${c.dim('Exemplos do dia a dia:')} Um bambolê, uma aliança, o aro metálico de uma roda de bicicleta.
     Ela tem apenas ${colors.bold}comprimento${colors.reset} (1 dimensão).

  ${c.highlight('🟡 CÍRCULO:')}
     É a ${colors.bold}região interna inteira${colors.reset} mais a borda.
     ${c.dim('Exemplos do dia a dia:')} Uma moeda, uma tampa de panela, uma pizza inteira.
     Ele tem ${colors.bold}área${colors.reset} (2 dimensões).

${diagramaGeral()}
`);
}

export function exibirCentro() {
  console.log(banner('1. O CENTRO DA CIRCUNFERÊNCIA (O)'));
  console.log(`
${c.subtitle('🎯 O que é o Centro?')}
O centro é um ponto especial fixo, geralmente chamado pela letra ${c.error('O')} (de Origem).

${c.highlight('Propriedade fundamental:')}
Todos os pontos da linha da circunferência estão rigorosamente à
${colors.bold}mesma distância${colors.reset} do centro!

${c.accent('Como imaginar:')}
Imagine fixar a ponta seca de ferro do compasso em uma folha.
O furinho que a ponta seca faz no papel é o ${c.error('CENTRO')}.
Conforme você gira o lápis ao redor dele, todos os pontos desenhados
ficam equidistantes daquele furinho!
`);
}

export function exibirRaio() {
  console.log(banner('2. O RAIO DA CIRCUNFERÊNCIA (r)'));
  console.log(`
${c.subtitle('📏 O que é o Raio?')}
O ${c.highlight('Raio (r)')} é o segmento de reta que liga o ${c.error('Centro (O)')}
a ${colors.bold}qualquer ponto da borda${colors.reset} da circunferência.

${diagramaRaio()}

${c.highlight('Características importantes:')}
  1. Não importa para onde você aponte: todos os raios de uma mesma
     circunferência têm exatamente a ${colors.bold}mesma medida${colors.reset}!
  2. ${c.accent('Analogia do dia a dia:')} Pense nos raios da roda de uma bicicleta.
     Eles saem do eixo central e vão até o aro. Se um raio fosse maior que
     os outros, a roda ficaria torta!
  3. Notação matemática: costumamos usar a letra minúscula ${c.formula('r')}.
`);
}

export function exibirDiametro() {
  console.log(banner('3. O DIÂMETRO DA CIRCUNFERÊNCIA (d)'));
  console.log(`
${c.subtitle('📐 O que é o Diâmetro?')}
O ${c.formula('Diâmetro (d)')} é um segmento de reta que vai de uma borda à outra,
${colors.bold}passando obrigatoriamente pelo CENTRO (O)${colors.reset}.

${diagramaDiametro()}

${c.highlight('Relação fundamental com o Raio:')}
Observe que o diâmetro é formado por ${colors.bold}dois raios alinhados${colors.reset}:
um raio do centro até um lado, e outro raio do centro até o lado oposto.

  ${colors.bgBlue}${colors.brightWhite}  FÓRMULA DE OURO:  ${colors.reset}
  ${c.formula('Diâmetro = 2 × Raio')}       ou seja:   ${c.formula('d = 2 · r')}
  ${c.formula('Raio = Diâmetro ÷ 2')}       ou seja:   ${c.formula('r = d / 2')}

${c.accent('Exemplo prático:')}
Se uma roda tem raio de ${colors.bold}15 cm${colors.reset}:
O seu diâmetro será: ${c.formula('d = 2 × 15 = 30 cm')}.

${c.accent('Curiosidade:')}
O diâmetro divide a circunferência perfeitamente em duas metades iguais,
chamadas de ${colors.bold}semicircunferências${colors.reset}!
`);
}

export function exibirCorda() {
  console.log(banner('4. A CORDA DA CIRCUNFERÊNCIA'));
  console.log(`
${c.subtitle('🧵 O que é uma Corda?')}
Uma ${c.subtitle('Corda')} é qualquer segmento de reta que liga dois pontos
quaisquer da circunferência.

${diagramaCorda()}

${c.highlight('Diferença entre Corda e Diâmetro:')}
  • Uma corda ${colors.bold}NÃO precisa${colors.reset} passar pelo centro.
  • Ela pode passar mais no cantinho ou mais perto do meio.

${c.formula('⭐ SUPER DICA PEDAGÓGICA (cai sempre em provas!):')}
  "O que acontece se uma corda passar bem no meio, pelo Centro?"
  Ela se torna o ${c.formula('DIÂMETRO')}!
  Por isso dizemos: ${colors.bold}${colors.brightYellow}O DIÂMETRO É A MAIOR CORDA POSSÍVEL${colors.reset} em uma circunferência!

${c.dim('Resumo rápido:')}
  - Todo diâmetro é uma corda? ${c.success('SIM!')} (a maior de todas).
  - Toda corda é um diâmetro? ${c.error('NÃO!')} (só se passar pelo centro).
`);
}

export function exibirPerimetro() {
  console.log(banner('5. PERÍMETRO / COMPRIMENTO DA CIRCUNFERÊNCIA (C)'));
  console.log(`
${c.subtitle('🔄 O que é o Perímetro (ou Comprimento)?')}
O perímetro é a ${colors.bold}distância total${colors.reset} percorrida ao dar uma volta completa
ao longo da linha da circunferência.

${c.accent('Analogia do barbante:')}
Imagine que você coloca um barbante contornando exatamente a borda de uma lata redonda.
Depois, você corta o barbante e o estica reto sobre uma régua.
O comprimento dessa linha esticada é o ${c.highlight('Perímetro (C)')}!

${c.subtitle('🥧 De onde vem o famoso Pi (π)?')}
Os matemáticos da antiguidade descobriram algo fascinante:
Se você pegar QUALQUER circunferência do universo (de uma moedinha até a órbita de um planeta)
e dividir o seu comprimento pelo seu diâmetro, o resultado dá SEMPRE o mesmo número:

           ${c.formula('Comprimento ÷ Diâmetro = π (pi)')}
           ${c.formula('π ≈ 3,14159265...')} (normalmente usamos ${c.warn('π ≈ 3,14')})

${c.subtitle('📐 As Fórmulas do Perímetro:')}
Como ${c.formula('d = 2 · r')}, temos duas formas equivalentes de calcular:

  ${colors.bgBlue}${colors.brightWhite}  FÓRMULA 1 (com o Raio):     ${colors.reset}  ${c.formula('C = 2 · π · r')}
  ${colors.bgBlue}${colors.brightWhite}  FÓRMULA 2 (com o Diâmetro): ${colors.reset}  ${c.formula('C = π · d')}

${c.accent('Exemplo:')}
Se uma tampa de pote tem raio ${colors.bold}r = 10 cm${colors.reset} (adotando π = 3,14):
  C = 2 · π · r
  C = 2 · 3,14 · 10
  C = 6,28 · 10 = ${c.highlight('62,8 cm')}
`);
}

export function exibirQuadroResumo() {
  console.log(banner('QUADRO DE RESUMO RÁPIDO'));
  console.log(`
┌──────────────────┬─────────────────────────────────────┬──────────────────────────┐
│ ${colors.bold}Elemento${colors.reset}         │ ${colors.bold}O que representa?${colors.reset}                   │ ${colors.bold}Fórmula / Relação${colors.reset}        │
├──────────────────┼─────────────────────────────────────┼──────────────────────────┤
│ ${c.error('Centro (O)')}       │ Ponto central de equilíbrio         │ Ponto de origem          │
│ ${c.highlight('Raio (r)')}         │ Distância do centro até a borda     │ ${c.formula('r = d / 2 = C / (2π)')}   │
│ ${c.formula('Diâmetro (d)')}     │ Borda a borda passando pelo centro  │ ${c.formula('d = 2 · r = C / π')}      │
│ ${c.subtitle('Corda')}            │ Liga quaisquer dois pontos da borda │ Diâmetro = maior corda   │
│ ${c.title('Comprimento (C)')}  │ Medida de 1 volta completa na borda │ ${c.formula('C = 2 · π · r = π · d')}   │
└──────────────────┴─────────────────────────────────────┴──────────────────────────┘
`);
}
