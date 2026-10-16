// src/colors.js
// Utilitários para formatação e cores no terminal sem dependências externas

export const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',

  // Cores de texto
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  // Cores brilhantes
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',

  // Fundo
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
};

export const c = {
  title: (txt) => `${colors.bold}${colors.brightCyan}${txt}${colors.reset}`,
  subtitle: (txt) => `${colors.bold}${colors.brightYellow}${txt}${colors.reset}`,
  highlight: (txt) => `${colors.bold}${colors.brightGreen}${txt}${colors.reset}`,
  formula: (txt) => `${colors.bold}${colors.brightMagenta}${txt}${colors.reset}`,
  accent: (txt) => `${colors.bold}${colors.brightBlue}${txt}${colors.reset}`,
  dim: (txt) => `${colors.dim}${txt}${colors.reset}`,
  error: (txt) => `${colors.bold}${colors.brightRed}${txt}${colors.reset}`,
  success: (txt) => `${colors.bold}${colors.brightGreen}${txt}${colors.reset}`,
  warn: (txt) => `${colors.bold}${colors.brightYellow}${txt}${colors.reset}`,
  tag: (txt) => `${colors.bgBlue}${colors.brightWhite} ${txt} ${colors.reset}`,
};

export function banner(titulo) {
  const linha = '━'.repeat(titulo.length + 6);
  return `\n${colors.brightCyan}┏${linha}┓\n┃   ${colors.bold}${colors.brightWhite}${titulo}${colors.reset}${colors.brightCyan}   ┃\n┗${linha}┛${colors.reset}\n`;
}
