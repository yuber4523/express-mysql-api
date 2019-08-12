import http from 'http';
import logger from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/routes';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
const httpServer = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

routes(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'RESTFul API using ExpressJS & MySQL!',
}));


httpServer.listen(port, () =>{
    console.log(`Server running at PORT:${port}`);
});