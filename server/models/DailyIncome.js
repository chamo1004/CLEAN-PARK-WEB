module.exports = (sequelize, DataTypes) => {
    const DailyIncome = sequelize.define("DailyIncome", {
      dailyincomeid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dailyincome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pdflink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    });
  
    DailyIncome.associate = (models) => {
        DailyIncome.hasMany(models.Income, {
        foreignKey: "DailyIncomeid",
      });
    };
  
    return DailyIncome;
  };
  