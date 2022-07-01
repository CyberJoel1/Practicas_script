'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    static associate(models) {}
  }
  Alumno.init(
    {
        ID_ALUMNO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          CEDULA_ALUMNO:{
            type: DataTypes.STRING
          },
          NOMBRE_ALUMNO:{
            type: DataTypes.STRING
          }
    },
    {
      sequelize,
      modelName: 'Alumno',
      tableName: 'alumno',
      createdAt: false,
      updatedAt: false
    }
  );
  return Alumno;
};
