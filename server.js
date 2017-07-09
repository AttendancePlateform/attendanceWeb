const app = require('./app/app');
const PORT = 3000;

app.listen(PORT, 'localhost', () => {
    console.log(`Server listening at ${PORT}`);
});

module.exports = app;

