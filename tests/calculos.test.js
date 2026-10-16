// tests/calculos.test.js
import test from 'node:test';
import assert from 'node:assert';
import {
  calcularPeloRaio,
  calcularPeloDiametro,
  calcularPeloPerimetro,
  formatarNumero,
} from '../src/calculadora.js';
import { questoes } from '../src/quiz.js';
import { diagramaGeral, desenharCircunferenciaDinamica } from '../src/desenho.js';

test('formatarNumero formata inteiros e decimais com vírgula', () => {
  assert.strictEqual(formatarNumero(10), '10');
  assert.strictEqual(formatarNumero(3.14), '3,14');
  assert.strictEqual(formatarNumero(7.5), '7,5');
});

test('calcularPeloRaio calcula diâmetro e perímetro corretamente', () => {
  const res = calcularPeloRaio(10, 3.14, 'cm');
  assert.strictEqual(res.r, 10);
  assert.strictEqual(res.d, 20);
  assert.strictEqual(res.perimetro, 62.8);
});

test('calcularPeloDiametro calcula raio e perímetro corretamente', () => {
  const res = calcularPeloDiametro(20, 3.14, 'cm');
  assert.strictEqual(res.d, 20);
  assert.strictEqual(res.r, 10);
  assert.strictEqual(res.perimetro, 62.8);
});

test('calcularPeloPerimetro calcula raio e diâmetro corretamente', () => {
  const res = calcularPeloPerimetro(62.8, 3.14, 'cm');
  assert.strictEqual(res.perimetro, 62.8);
  assert.strictEqual(res.d, 20);
  assert.strictEqual(res.r, 10);
});

test('questões do quiz têm formato válido e resposta correta no range', () => {
  assert.ok(questoes.length >= 5);
  for (const q of questoes) {
    assert.ok(q.pergunta.length > 0);
    assert.ok(Array.isArray(q.opcoes));
    assert.ok(q.opcoes.length === 4);
    assert.ok(q.respostaCorreta >= 0 && q.respostaCorreta < q.opcoes.length);
    assert.ok(q.explicacao.length > 0);
  }
});

test('diagramas geram strings válidas', () => {
  const diag = diagramaGeral();
  assert.ok(diag.includes('CENTRO'));
  assert.ok(diag.includes('RAIO'));
  assert.ok(diag.includes('DIÂMETRO'));
  assert.ok(diag.includes('CORDA'));

  const circ = desenharCircunferenciaDinamica(6);
  assert.ok(circ.includes('O'));
  assert.ok(circ.includes('*'));
});
