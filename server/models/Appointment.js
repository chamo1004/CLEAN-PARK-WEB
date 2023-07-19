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
      as: 'car',
    });
  
  Appointment.hasMany(models.Service, {
    foreignKey: ' appointmentid',
    as: 'service',
  });
};
  return Appointment;
};
