const {Model, DataTypes} = require('sequelize');
const sequelize = require('./mysql.js');

const Appointments = sequelize.define(
  'Appointment',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'schedules',
    timestamps: false,
  },
);

module.exports = Appointments;
