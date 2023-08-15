import sequelize from 'sequelize'
const seq = new sequelize('todolist', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default seq;
