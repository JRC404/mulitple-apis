const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

const PORT = process.env.PORT

const getAPIdata = require('./lib/apiData');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async (req, res) => {
    let name = "Jacob"
    console.log(name)
    res.render('index', {
        name
    });
})

app.get('/rickandmorty', async (req, res) => {
    let data = await getAPIdata.rickAndMortyData();
    console.log(data)

    let id = data.id
    let name = data.name

    res.render('rickandmorty', {
        data: {
            id,
            name
        }
    })
})



app.listen(PORT || 3000, () => {
    console.log(`server listening on ${PORT}`);

})