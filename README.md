# 📝 Gerador de Relatórios PPP (Progressos, Planos, Problemas) - Versão Web

## 📖 Descrição

Esta é a versão web do Gerador de Relatórios PPP (Progressos, Planos, Problemas), uma aplicação moderna e intuitiva construída com React, TypeScript e Vite. Ela permite gerar e visualizar relatórios de forma eficiente, com foco na experiência do usuário e na adaptabilidade a diferentes dispositivos.

**Você também pode conferir a versão desktop deste projeto, desenvolvida em Python/Tkinter:**

- Repositório do Projeto Desktop: [https://github.com/Felipe-Linhares/PPP-REPORT](https://github.com/Felipe-Linhares/PPP-REPORT)

## ✨ Características

- **Interface Web Intuitiva**: Design moderno e responsivo, adaptado para uso em navegadores.
- **Visualização em Tempo Real**: Veja seu relatório formatado automaticamente enquanto digita nos campos.
- **Gerenciamento de Data**:
  - Calendário integrado (`react-datepicker`) para seleção fácil da data.
  - Preenchimento automático da data atual ao iniciar.
- **Gerenciamento de Squad**:
  - Seleção de squad pré-configurada em um dropdown.
- **Gerenciamento de Sprint**:
  - Campo dedicado para o número ou nome da Sprint.
- **Seções do Relatório (Abas)**:
  - PROGRESSOS
  - PLANOS
  - PROBLEMAS
  - Alterne facilmente entre as seções para adicionar informações.
- **Tema Claro/Escuro (Dark Mode)**: Alternância de tema com um botão de ícone (sol/lua) e persistência da preferência do usuário (salvo localmente).
- **Opção de Exportação**: Copiar o relatório formatado para a área de transferência com um clique.
- **Saída Formatada Automaticamente**: O relatório segue um formato padrão claro e legível.

## 🚀 Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Vite:** Empacotador de módulos rápido para desenvolvimento front-end.
- **CSS:** Estilização da aplicação.
- **`react-datepicker`:** Componente de seletor de datas.
- **`date-fns`:** Utilitário para manipulação de datas (usado pelo `react-datepicker` para localização).
- **`react-icons`:** Biblioteca de ícones SVG.
- **GitHub Actions:** Para automação de CI/CD (Deploy Contínuo).

## ⚙️ Instalação e Execução (Desenvolvimento Local)

Para clonar o repositório e executar a aplicação em seu ambiente de desenvolvimento:

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/Felipe-Linhares/PPP-REPORT-REACT.git](https://github.com/Felipe-Linhares/PPP-REPORT-REACT.git)
    cd PPP-REPORT-REACT
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o [Node.js e npm](https://nodejs.org/en/download/) (versão 18 ou superior recomendada) instalados em sua máquina.

    ```bash
    npm install
    # ou, se preferir yarn:
    # yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    # yarn dev
    ```
    A aplicação será aberta automaticamente em seu navegador, geralmente em `http://localhost:5173`.

## 📦 Estrutura do Projeto

```
PPP-REPORT-REACT/
├── public/
├── src/
│   ├── components/
│   │   ├── FormDatePicker.tsx
│   │   ├── FormInput.tsx
│   │   ├── FormSelect.tsx
│   │   ├── ReportPreview.tsx
│   │   ├── TabButtons.tsx
│   │   └── TextAreaTab.tsx
│   ├── hooks/
│   │   └── useAutoResizeTextarea.ts
│   ├── utils/
│   │   └── reportFormatter.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 📊 Formato do Relatório Gerado

O relatório gerado seguirá o seguinte formato, com o texto dos itens quebrando e identando automaticamente para melhor legibilidade:

```
PPP REPORT
DATA: 22/05/2025
SQUAD: Aincrad
SPRINT(s): 47
===========
PROGRESSOS
1. Finalização da implementação do módulo de autenticação.
2. Realização de testes de integração no módulo de pagamentos.
3. Correção dos bugs reportados na sprint anterior relacionados à UI.

===========
PLANOS
1. Iniciar o desenvolvimento do módulo de relatórios.
2. Realizar reunião de alinhamento com o time de UX.
3. Preparar documentação técnica do módulo de autenticação.

===========
PROBLEMAS
1. Atraso na entrega da API de integração com o sistema legado.
2. Necessidade de refatoração do código do módulo de notificações.
3. Performance issues identificados no ambiente de homologação.
```

## 👤 Autor

[Felipe Linhares](https://github.com/Felipe-Linhares)

## 🏷️ Versão

- 1.0.0 (Data: 21/05/2025)
  - Lançamento inicial da versão web.
  - Implementação de todas as funcionalidades de geração de relatório.
  - Suporte a tema claro/escuro.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- **Repositório deste Projeto (Web):** [https://github.com/Felipe-Linhares/PPP-REPORT-REACT](https://github.com/Felipe-Linhares/PPP-REPORT-REACT)
- **Repositório do Projeto Desktop:** [https://github.com/Felipe-Linhares/PPP-REPORT](https://github.com/Felipe-Linhares/PPP-REPORT)
- **Reportar Bugs/Issues:** [https://github.com/Felipe-Linhares/PPP-REPORT-REACT/issues](https://github.com/Felipe-Linhares/PPP-REPORT-REACT/issues)
