module.exports = (sequelize, DataTypes) => {

    const Income = sequelize.define("Income", {
  
      incomeid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      vehiclenumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      payment: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
          
    });
    Income.associate = (models) => {
      Income.belongsTo(models.DailyIncome, {
        foreignKey: 'dailyincomeid',
       
      });
    };
  
    return Income;
  };