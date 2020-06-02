import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');



    response.json([
        'Diego',
        'José',
        'Batata',
        'Jantinha'
    ]);
});

app.listen(3333);