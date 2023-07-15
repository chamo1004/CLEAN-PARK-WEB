module.exports = (sequelize, DataTypes) => {

    const Car = sequelize.define("Car", {
    
        carid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
    });
    
    Car.associate = (models) => {
      Car.belongsTo(models.Customer, {
        foreignKey: 'customerid',
        as: 'customer',
      });
    };
  
    return Car;
  };