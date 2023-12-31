module.exports = (sequelize, DataTypes) => {

    const Job = sequelize.define("Job", {
  
      jobid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      price: {
        type: DataTypes.STRING,
        allowNull: true,
      },      
    });
    Job.associate = (models) => {
      Job.belongsTo(models.Service, {
        foreignKey: 'serviceid',
       
      });
    };
  
    return Job;
  };