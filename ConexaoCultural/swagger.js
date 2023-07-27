const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

const securityDefinitions = {
    Bearer: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'Enter a valid token to test the requests below.'
    }
};

const config = {
    info: {
      version: '1.0.0',
      title: 'Conexão Cultural',
      description:
        'A API Conexão Cultural é uma plataforma para conectar jovens a atividades culturais. Permite o registro de usuários, pesquisa e inscrição em atividades e eventos, além do gerenciamento eficiente desses eventos por administradores.',
    },
    host: 'conexao-cultural.onrender.com',
    basePath: '/',
    schemes: ['https', 'http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    security: [
      {
      "Bearer": []
      }
    ], 
};


swaggerAutogen(outputFile, endpointsFiles, {...config, securityDefinitions});
