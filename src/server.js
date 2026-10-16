// src/server.js
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { colors, c, banner } from './colors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HTML_PATH = path.join(__dirname, '..', 'visualizador.html');

const PORT = 3000;

const server = http.createServer((req, res) => {
  fs.readFile(HTML_PATH, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Erro ao carregar o visualizador interativo.');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(banner('LABORATÓRIO VISUAL DA CIRCUNFERÊNCIA INICIADO!'));
  console.log(`${c.success('✔ Servidor web ativo!')}`);
  console.log(`\nAbra o link a seguir no seu navegador para ver o laboratório interativo:\n`);
  console.log(`  👉 ${colors.bold}${colors.brightCyan}http://localhost:${PORT}${colors.reset}\n`);
  console.log(`${c.dim('Pressione Ctrl+C para encerrar o servidor quando terminar a aula.')}\n`);
});
