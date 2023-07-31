// models/Income.js

module.exports = (sequelize, DataTypes) => {
  const Income = sequelize.define("Income", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    vehiclenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  return Income;
};
