module.exports = (sequelize, DataTypes) => {

    const Service = sequelize.define("Service", {
  
      serviceid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },      
    });
  
    return Service;
  };