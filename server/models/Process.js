module.exports = (sequelize, DataTypes) => {

    const Process = sequelize.define("Process", {
    
        processid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },      
    });
  
    return Process;
  };