module.exports = (sequelize, DataTypes, models) => {
  const Service = sequelize.define("Service", {
    serviceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    servicetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  
  Service.belongsToMany(models.Appointment, {
    through: models.AppointmentService, 
    foreignKey: 'serviceid', 
    otherKey: 'appointmentid', 
  });
   
  Service.hasMany(models.Job, {
    foreignKey: 'serviceid',
    as: 'job',
  });
 

  return Service;
};
