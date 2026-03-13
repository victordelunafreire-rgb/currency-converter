# 💸 DevClub Currency Converter - Plus Version

Este projeto é um conversor de moedas desenvolvido durante o curso DevClub, mas com implementações personalizadas que vão além do escopo básico do exercício original.

## 🚀 Melhorias Implementadas (Branch: feature/dynamic-converter)

Diferente da versão padrão que foca em conversões fixas de Real para Dólar, esta versão introduz:

- **Conversão Universal:** Lógica dinâmica que permite converter entre qualquer par de moedas disponível (Real, Dólar, Euro, Libra e Bitcoin).
- **Interface Reativa:** Uso do evento `change` nos seletores para atualizar bandeiras e nomes das moedas em tempo real, sem necessidade de clique.
- **Sincronização Automática:** Ao trocar a moeda de origem ou destino, o cálculo é refeito instantaneamente para manter a UI sempre atualizada.
- **Internacionalização (Intl):** Formatação dinâmica de localidade e moeda (`en-US`, `pt-BR`, `de-DE`), garantindo que os símbolos e pontuações sigam o padrão de cada país.
- **Código Escalável:** Organização de dados em objetos literais (Dicionários), facilitando a manutenção e adição de novas moedas sem poluir o código com estruturas condicionais (`if/else`).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização moderna e responsiva.
- **JavaScript (ES6+):** Manipulação de DOM, Event Listeners e API de Internacionalização.

## 📸 Screenshots

Aqui estão os destaques do funcionamento do projeto:

### 1. Conversão Dinâmica e Formatação de Moeda

![imagem](./assets/print-1.png)

### 2. Sincronia de Interface e Bandeiras

![imagem](./assets/print-2.png)

---
Desenvolvido por **Victor** como parte do portfólio de transição de carreira para Front-End Developer.
