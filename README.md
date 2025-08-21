# Meu Currículo Online

Este projeto é um currículo digital desenvolvido em **React**, com layout moderno e responsivo. Ele apresenta minhas experiências profissionais, formação acadêmica, cursos, certificações e informações de contato de forma organizada e interativa.

---

## Funcionalidades

- **Perfil Lateral:** Exibe foto, informações de contato, habilidades e links para redes sociais.
- **Seções Expansíveis:** Objetivo, Formação, Cursos, Experiências Profissionais e Certificações podem ser abertas ou fechadas para facilitar a navegação.
- **Visualização de Certificados:** Os certificados podem ser visualizados em um modal, sem sair da página.
- **Design Responsivo:** O currículo se adapta automaticamente a diferentes tamanhos de tela e dispositivos.
- **Ícones Personalizados:** Utiliza ícones para melhorar a experiência visual e tornar a navegação mais intuitiva.

---

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [react-icons](https://react-icons.github.io/react-icons/)

---

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/meu-curriculo.git
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o projeto:**
   ```bash
   npm start
   ```

---

## Estrutura de Pastas

```
src/
├── CardProfile.js
├── CardProfile.css
├── Corpo.js
├── Corpo.css
├── Curriculo.js
├── Curriculo.css
└── certificados/
    └── [seus arquivos PDF]
```

---

## Personalização

- **Adicionar Certificados:**  
  Para incluir novos certificados, basta adicionar o arquivo PDF na pasta `certificados` e inserir as informações correspondentes no array de certificados dentro de `Curriculo.js`.
- **Editar Informações Pessoais:**  
  As experiências, cursos e formação acadêmica podem ser atualizadas diretamente nos componentes específicos.

---

