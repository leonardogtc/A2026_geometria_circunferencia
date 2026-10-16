// src/desenho.js
import { colors, c } from './colors.js';

/**
 * Diagrama esquemático completo rotulado com cores no terminal.
 */
export function diagramaGeral() {
  return `
               ${colors.brightCyan}╭─────────────────────────────╮${colors.reset}
            ${colors.brightCyan}╭──╯                             ╰──╮${colors.reset}
          ${colors.brightCyan}╭─╯                                     ╰─╮${colors.reset}
        ${colors.brightCyan}╭─╯        ${colors.brightYellow}●───────────────────●${colors.brightCyan}              ╰─╮${colors.reset}
       ${colors.brightCyan}│${colors.reset}           ${colors.brightYellow}A       CORDA       B${colors.reset}                ${colors.brightCyan}│${colors.reset}
      ${colors.brightCyan}│${colors.reset}                                                   ${colors.brightCyan}│${colors.reset}
     ${colors.brightCyan}│${colors.reset}                                                     ${colors.brightCyan}│${colors.reset}
    ${colors.brightCyan}│${colors.reset}                          ${colors.brightGreen}RAIO (r)${colors.reset}                    ${colors.brightCyan}│${colors.reset}
    ${colors.brightCyan}│${colors.reset}                 ${colors.brightRed}●${colors.brightGreen}───────────────────────► ●${colors.reset}        ${colors.brightCyan}│${colors.reset}
    ${colors.brightCyan}│${colors.reset}              ${colors.brightRed}CENTRO (O)${colors.reset}                  ${colors.brightGreen}Ponto P${colors.reset}    ${colors.brightCyan}│${colors.reset}
    ${colors.brightCyan}│${colors.reset}                   │                                 ${colors.brightCyan}│${colors.reset}
     ${colors.brightCyan}│${colors.reset}                  │                                ${colors.brightCyan}│${colors.reset}
      ${colors.brightCyan}│${colors.reset}        ${colors.brightMagenta}●────────┼────────●${colors.reset}                      ${colors.brightCyan}│${colors.reset}
       ${colors.brightCyan}│${colors.reset}       ${colors.brightMagenta}C    DIÂMETRO (d)  D${colors.reset}                     ${colors.brightCyan}│${colors.reset}
        ${colors.brightCyan}╰─╮      ${colors.brightMagenta}(passa pelo Centro O)${colors.reset}                    ╭─╯${colors.reset}
          ${colors.brightCyan}╰─╮                                     ╭─╯${colors.reset}
            ${colors.brightCyan}╰──╮                             ╭──╯${colors.reset}
               ${colors.brightCyan}╰─────────────────────────────╯${colors.reset}

  ${colors.bold}Legenda Visual:${colors.reset}
  • ${c.error('● CENTRO (O)')}      : O ponto exato no meio de tudo.
  • ${c.highlight('──► RAIO (r)')}      : Distância do Centro (O) até a borda (P).
  • ${c.formula('─── DIÂMETRO (d)')}  : Segmento de borda a borda que passa pelo Centro (${c.formula('d = 2 × r')}).
  • ${c.subtitle('─── CORDA')}         : Segmento ligando quaisquer dois pontos da borda (A e B).
  • ${c.title('╭─╮ CIRCUNFERÊNCIA')} : A linha curva fechada (o contorno/perímetro).
`;
}

/**
 * Diagrama focado no Raio e Centro
 */
export function diagramaRaio() {
  return `
               ${colors.brightCyan}. - ~ ~ ~ - .${colors.reset}
           . '               ' .
         /                       \\
        /                         \\
       |            ${colors.brightGreen}RAIO (r)${colors.reset}       |
       |       ${colors.brightRed}O${colors.brightGreen} •─────────────► •${colors.reset} |  ${colors.dim}<- Qualquer segmento do centro${colors.reset}
       |      ${colors.brightRed}Centro${colors.reset}            ${colors.brightGreen}Borda${colors.reset}  |     ${colors.dim}à borda tem a MESMA medida!${colors.reset}
        \\                         /
         \\                       /
           . '               ' .
               ${colors.brightCyan}' - ~ ~ ~ - '${colors.reset}
`;
}

/**
 * Diagrama focado no Diâmetro
 */
export function diagramaDiametro() {
  return `
               ${colors.brightCyan}. - ~ ~ ~ - .${colors.reset}
           . '               ' .
         /                       \\
        /     ${colors.brightMagenta}DIÂMETRO (d = 2 × r)${colors.reset}       \\
       |                               |
       |  ${colors.brightMagenta}•───────────${colors.brightRed}O${colors.brightMagenta}───────────•${colors.reset}  |  ${colors.dim}<- Passa obrigatoriamente${colors.reset}
       |  ${colors.brightMagenta}A           ${colors.brightRed}Centro${colors.brightMagenta}          B${colors.reset}  |     ${colors.dim}pelo centro O.${colors.reset}
        \\   [--raio--] [--raio--]     /     ${colors.dim}Divide a circunferência em duas!${colors.reset}
         \\                       /
           . '               ' .
               ${colors.brightCyan}' - ~ ~ ~ - '${colors.reset}
`;
}

/**
 * Diagrama focado na Corda
 */
export function diagramaCorda() {
  return `
               ${colors.brightCyan}. - ~ ~ ~ - .${colors.reset}
           . '   ${colors.brightYellow}Corda 1${colors.reset}       ' .
         /     ${colors.brightYellow}•─────────•${colors.reset}           \\    ${colors.dim}<- Liga dois pontos da borda${colors.reset}
        /                             \\
       |                               |
       |              ${colors.brightRed}O${colors.reset}               |   ${colors.dim}<- Centro O${colors.reset}
       |                               |
        \\       ${colors.brightMagenta}•──────${colors.brightRed}O${colors.brightMagenta}──────•${colors.reset}        /   ${colors.formula}<- MAIOR CORDA POSSÍVEL:${colors.reset}
         \\      ${colors.brightMagenta}O DIÂMETRO É UMA CORDA!${colors.reset} /      ${colors.formula}   (o próprio Diâmetro!)${colors.reset}
           . '               ' .
               ${colors.brightCyan}' - ~ ~ ~ - '${colors.reset}
`;
}

/**
 * Desenha dinamicamente uma circunferência no terminal com base no raio escolhido
 */
export function desenharCircunferenciaDinamica(raioChars = 8) {
  const r = Math.max(4, Math.min(14, raioChars));
  const aspectoAspecto = 2.0; // Correção para proporção de caracteres do terminal (altura > largura)
  let output = '';

  for (let y = -r; y <= r; y++) {
    let linha = '    ';
    for (let x = -r * aspectoAspecto; x <= r * aspectoAspecto; x++) {
      const dist = Math.sqrt((x / aspectoAspecto) ** 2 + y ** 2);

      if (x === 0 && y === 0) {
        linha += `${colors.bold}${colors.brightRed}O${colors.reset}`; // Centro
      } else if (y === 0 && x > 0 && x <= r * aspectoAspecto) {
        linha += `${colors.brightGreen}─${colors.reset}`; // Linha do raio
      } else if (Math.abs(dist - r) < 0.6) {
        linha += `${colors.brightCyan}*${colors.reset}`; // Borda da circunferência
      } else {
        linha += ' ';
      }
    }
    output += linha + '\n';
  }

  return output;
}
