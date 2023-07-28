<h1 align="center">
  <img src= "https://i.postimg.cc/Pr3sXFXg/Captura-de-Tela-2.png" width="650px"/>
</h1>

#  {reprograma} Projeto Final 
Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/)

<p align="center">

Aplicação disponível [aqui](https://conexao-cultural.onrender.com/minha-rota-de-documentacao/) 
<p>



## Objetivo

O objetivo do Conexão Cultural é conectar jovens a eventos e atividades culturais de maneira simples e eficaz, promovendo maior engajamento e enriquecimento cultural por meio da facilitação do acesso a informações relevantes sobre tais eventos.




### Funcionalidades:

- Registro de usuários: Permite aos jovens criar um perfil fornecendo informações básicas como nome, idade e interesses culturais.

- Cadastro de atividades culturais: Administradores do sistema podem inserir novas atividades culturais, incluindo detalhes como descrição, horário, local e número máximo de participantes.

- Inscrição em atividades: Jovens podem procurar e se inscrever em atividades de seu interesse.

- Gerenciamento de inscrições: Os administradores podem revisar e confirmar inscrições, além de gerenciar listas de espera.

- Cadastro de eventos culturais: Os administradores podem inserir novos eventos culturais, fornecendo informações como data, local, descrição e se os usuários podem se inscrever.

- Login de administradores: Administradores podem realizar login na plataforma para acessar funcionalidades administrativas.

- Remoção de administradores, usuários e atividades: Administradores podem remover entradas de usuários, administradores e atividades a qualquer momento.

- Atualização de informações de usuário e atividades: Administradores e usuários têm a capacidade de atualizar suas informações ou de atividades conforme necessário.




#### Arquitetura MRC
```
 📁 ConexaoCultural
   |
   |- 📁 src
   |   |
   |   |- 📁 controllers
   |       |- 📑 activitiesController.js
   |       |- 📑 usersController.js
   |       |- 📑 adminController.js
   |     
   |
   |   |- 📁 database
   |       |- 📑 dbConnect.js
   |
   |   |- 📁 models
   |       |- 📑 activitiesModel.js
   |       |- 📑 usersModel.js
   |       |- 📑 adminModel.js
   |       
   |
   |    |- 📁 routes
   |       |- 📑 activitiesRoutes.js 
   |       |- 📑 adminRoutes.js   
   |       |- 📑 usersRoutes.js
   |       
   |
   |    |- 📑 app.js
   |
   |- 📁 swagger
   |   |- 📑 swagger_output.json
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 server.js
   |- 📑 swagger.js
   |- 📑 README.md
   ```





### Instalações

```bash
# Clonar o repositório
$ git clone https://github.com/marierodri/Projeto-Conexao-Cultural.git

# Entrar na pasta do repositório
$ cd ConexaoCultural

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start 

```



### Tecnologias e pacotes utilizados
- Node.js
- MongoDB
- Render
- Express
- Nodemon
- Dotenv
- Mongoose
- Bcrypt
- Jsonwebtoken
- Cors
- Swagger-autogen
- Swagger-ui-express



#### Agradecimento 
- Gostaria de expressar minha gratidão à equipe do curso e aos meus colegas de turma. A orientação valiosa da equipe e o apoio contínuo das colegas foram muito importantes para a minha jornada de aprendizado.
