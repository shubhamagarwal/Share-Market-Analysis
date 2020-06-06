const stashDataPath = 'data/stashaway.json';
const twentyEightyPortFolio = 'data/2080portfolio.json';
const foutrySixtyPortFolio = 'data/4060portfolio.json'
const appRouter = (app, fs) => {

    // default route
    app.get('/stashAwayPortfolio', (req, res) => {
        fs.readFile(stashDataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    app.get('/2080Portfolio', (req, res) => {
        fs.readFile(twentyEightyPortFolio, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    app.get('/4060portfolio', (req, res) => {
        fs.readFile(foutrySixtyPortFolio, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

};

module.exports = appRouter;