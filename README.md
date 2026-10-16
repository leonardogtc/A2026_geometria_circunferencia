# 📐 Aula Interativa de Circunferência (Node.js & JavaScript)

Este projeto foi desenvolvido especialmente para ensinar geometria e circunferência a uma aluna de forma dinâmica, intuitiva e didática.

Ele aborda de forma prática e teórica:
- **Centro da Circunferência ($O$)**
- **Raio ($r$)**
- **Diâmetro ($d$)**
- **Corda** (e a relação demonstrando que o diâmetro é a maior corda)
- **Perímetro / Comprimento ($C$)** e o número **$\pi$ (Pi)**

E inclui uma **calculadora didática passo a passo** (capaz de calcular o raio, o diâmetro e o perímetro/comprimento a partir de qualquer uma das medidas conhecidas).

---

## 🚀 Como Executar o Programa

### Pré-requisito
- Node.js instalado (versão 18 ou superior).

### 1. Iniciar o Programa no Terminal (CLI)
No terminal, dentro da pasta do projeto, execute:

```bash
npm start
```
*(ou se preferir: `node src/index.js`)*

### 2. Abrir o Laboratório Gráfico no Navegador (Opcional)
Se quiser mostrar à aluna uma animação interativa com círculos coloridos, controle de tamanho do raio e cordas móveis em tempo real:

```bash
npm run web
```
E acesse no navegador: **`http://localhost:3000`**  
*(Ou basta dar dois cliques no arquivo `visualizador.html` diretamente no seu computador)*.

### 3. Executar os Testes Automatizados
```bash
npm test
```

---

## 📚 Funcionalidades do Programa

### 1. 📖 Modo Aula / Teoria
- **Circunferência vs Círculo**: Explicação clara da diferença (bambolê/linha vs pizza/região preenchida).
- **Centro ($O$)**: Ponto fixo central equidistante de todas as partes da borda.
- **Raio ($r$)**: Segmento do centro à borda, analogia aos raios da bicicleta.
- **Diâmetro ($d$)**: Segmento de ponta a ponta passando pelo centro ($d = 2 \cdot r$).
- **Corda**: Segmento ligando quaisquer dois pontos da borda. Enfatiza que o **diâmetro é a maior corda possível**.
- **Perímetro / Comprimento ($C$)**: A medida de 1 volta completa esticada em linha reta ($C = 2 \cdot \pi \cdot r = \pi \cdot d$).
- **Quadro de Resumo**: Tabela para anotações rápidas no caderno.

### 2. 🧮 Calculadora Didática Passo a Passo
Permite calcular todas as medidas a partir de qualquer dado conhecido, mostrando o raciocínio matemático:
1. **A partir do Raio ($r$)**: Calcula o Diâmetro ($d = 2 \cdot r$) e o Perímetro ($C = 2 \cdot \pi \cdot r$).
2. **A partir do Diâmetro ($d$)**: Calcula o Raio ($r = d / 2$) e o Perímetro ($C = \pi \cdot d$).
3. **A partir do Perímetro ($C$)**: Calcula o Diâmetro ($d = C / \pi$) e o Raio ($r = d / 2$).
- *Flexibilidade de $\pi$*: Permite escolher entre $\pi = 3,14$, precisão decimal total ou $\pi = 3$.

### 3. 🎨 Visualizador Gráfico e Desenho Dinâmico
- Diagramas esquemáticos rotulados no terminal com cores ANSI.
- Gerador dinâmico de círculos no terminal com base no raio digitado.

### 4. 🎯 Desafio da Aluna (Quiz Gamificado)
- Perguntas conceituais e desafios de cálculo práticos (roda de bicicleta, tampa de panela, pista circular).
- Feedback imediato: elogio para acertos e explicações gentis em caso de dúvida.
- Pontuação final com mensagem incentivadora.

---

## 📁 Estrutura de Arquivos

```text
├── package.json          # Configurações do projeto e scripts npm
├── visualizador.html     # Laboratório gráfico interativo para o navegador
├── src/
│   ├── colors.js         # Cores ANSI e formatação no terminal
│   ├── desenho.js        # Diagramas e renderizador ASCII de círculos
│   ├── teoria.js         # Conteúdo pedagógico e analogias cotidianas
│   ├── calculadora.js    # Fórmulas e cálculos com passo a passo didático
│   ├── quiz.js           # Perguntas e respostas interativas
│   ├── server.js         # Servidor HTTP nativo para o laboratório web
│   └── index.js          # Menu principal interativo (CLI)
└── tests/
    └── calculos.test.js  # Testes unitários das fórmulas e diagramas
```

---

## 👩‍🏫 Dicas Pedagógicas para a Aula

1. **Comece com a analogia física**: Pergunte à aluna se ela já viu um bambolê ou uma aliança (circunferência) versus uma moeda ou prato (círculo).
2. **Mostre a corda móvel**: No menu gráfico ou no `visualizador.html`, mostre uma corda deslizando até o centro. Deixe a aluna perceber por conta própria que quando a corda passa pelo centro ela atinge o tamanho máximo (o diâmetro).
3. **Desmistifique o $\pi$**: Explique que $\pi$ não é um "número assustador", mas sim quantas vezes o diâmetro cabe na volta da circunferência (um pouco mais de 3 vezes).
4. **Finalize com o Quiz**: Deixe a aluna assumir o teclado para responder ao quiz e consolidar a autoconfiança!
