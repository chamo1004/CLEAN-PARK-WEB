module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    appointmentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Add this line to set the default value to false
    },
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.Car, {
      foreignKey: 'carid',
      
    });
  
    Appointment.belongsToMany(models.Service, {
      through: models.AppointmentService, // Use the join table model
      foreignKey: 'appointmentid', // The foreign key in the join table related to the Appointment model
     
    });
};
  return Appointment;
};
