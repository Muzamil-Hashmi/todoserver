// models/User.js
import { DataTypes } from 'sequelize';
import seq from '../utils/sequelize.js'

const Todos = seq.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},{
  timestamps: true, // Add this line to include timestamps
});

export default  Todos;
