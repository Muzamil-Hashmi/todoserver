import express from 'express'
import apiRoutes from './routes/api.js';
import sequelize from './utils/sequelize.js'

const app = express();
const Port = 8000;
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });


app.use('/api', apiRoutes)
app.listen(Port, (req, res) => {

    console.log(`Your App is Runing on the POrt ${Port}`)
}); 
