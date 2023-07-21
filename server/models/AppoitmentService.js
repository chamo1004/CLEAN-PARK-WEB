// models/AppointmentService.js
module.exports = (sequelize, DataTypes) => {
    const AppointmentService = sequelize.define(
      'AppointmentService',
      {
        appointmentserviceid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
      },

    );
  
    return AppointmentService;
  };
  