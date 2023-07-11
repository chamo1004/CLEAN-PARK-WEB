module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("Customer", {
    
        customerid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      backuptel: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
    });
  
    return Customer;
  };