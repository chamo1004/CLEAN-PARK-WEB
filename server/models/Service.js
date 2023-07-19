module.exports = (sequelize, DataTypes) => {
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

  // Define the many-to-many association with Appointment
  Service.belongsToMany(sequelize.models.Appointment, {
    through: "AppointmentService", // This is the join table name
    foreignKey: "serviceid", // The foreign key in the join table related to the Service model
  });

  return Service;
};
