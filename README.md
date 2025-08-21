Meu Currículo Online
Este projeto é um currículo digital desenvolvido em React, com layout moderno e responsivo. Ele apresenta minhas experiências profissionais, formação, cursos, certificações e informações de contato de forma organizada e interativa.

Funcionalidades:
Perfil lateral: Exibe foto, contatos, habilidades e links para redes sociais.
Seções expansíveis: Objetivo, Formação, Cursos, Experiências Profissionais e Certificações podem ser abertas ou fechadas para facilitar a navegação.
Visualização de certificados: Os certificados podem ser visualizados em um modal, sem sair da página.
Design responsivo: O currículo se adapta a diferentes tamanhos de tela.
Ícones personalizados: Utiliza ícones para melhorar a experiência visual.

Tecnologias utilizadas:
React
CSS3
react-icons

Como rodar o projeto:
git clone https://github.com/seu-usuario/meu-curriculo.git

Clone este repositório:
npm install

Instale as dependências:
npm start        

Estrutura de Pastas:
src/
├── CardProfile.js
├── CardProfile.css
├── Corpo.js
├── Corpo.css
├── Curriculo.js
├── Curriculo.css
└── certificados/
    └── [seus arquivos PDF]
    
Personalização:
Para adicionar novos certificados, basta incluir o arquivo PDF na pasta certificados e adicionar as informações no array de certificados em Curriculo.js.
As experiências, cursos e formação podem ser editados diretamente nos componentes correspondentes.
