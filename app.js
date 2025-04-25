const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Oppgavenettside' });
});

app.get('/oppgaver', (req, res) => {
    res.render('oppgaver', { title: 'Oppgaver' });
});

app.get('/oppgaver/:id', (req, res) => {
    const oppgaveId = req.params.id;
    res.render('oppgave', { 
        title: `Oppgave ${oppgaveId}`,
        oppgaveId: oppgaveId
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 