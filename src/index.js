import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import routes from './routes/index';


const app = express();

app.use(express.json());
app.use(express.static('src/assets/files'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const httpServer = http.createServer(app);


app.use('/api',routes);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to Youtube!' }));
app.use((req, res) => res.status(404).send({
  status: 404,
  error: 'route Not Found!',
}));
const port = process.env.PORT || 8000;
    httpServer.listen({ port }, () => {
      console.log(`Server is running on port ${port}`);
    });
export default app