// merujuk express, body-parser, cors, dan file json
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let h = require('./data/heroesList');
let p = require('./data/personalsList');

// instansiasi object express dan di simpan pada konstanta app
const app = express();

// gunakan body parser sebagai middleware
app.use(bodyParser.json());
// gunakan cors sebagai middleware
app.use(cors());

// contoh routing pada express
app.get('/', (request, response) => response.send('Hadeuh nyala juga nih server :\')'));

// memberikan List heroes workouts
app.get('/heroes', (request, response) => {    
    return response.json(h);
});

// memberikan List personal workouts
app.get('/personals', (request, response) => {
    return response.json(p);
});

// menampilkan heroes workout yang diminta sesuai id
app.get('/personals/:personalId', (request, response) => {
    const result = p.find(val => {
        return val.personalId === parseInt(request.params.personalId);
    });
    return response.json(result);
});

// menampilkan personal workout yang diminta sesuai id
app.get('/heroes/:heroId', (request, response) => {
    const result = h.find(val => {
        return val.heroId === parseInt(request.params.heroId);
    });
    return response.json(result);
});

// memasukan personal workout baru
app.post('/personals', (request, response) => {
    const newWorkout = {
        personalId: p.length + 1,
        name: request.body.name,
    };
    p.push(newWorkout);
    return response.json(newWorkout);
});

// menghapus personal workout yang ada
app.delete('/personals/:personalId', (request, response) => {
    p = p.filter(val => {
        return val.personalId !== parseInt(request.params.personalId);
    });

    return response.json(p);
});

// mendengarkan event yang terjadi pada localhost dengan port 8080
app.listen(8080, () => console.log('listenig on localhos:8080'));