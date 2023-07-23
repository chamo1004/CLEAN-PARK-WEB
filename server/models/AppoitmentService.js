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
    AppointmentService.associate = (models) => {
      AppointmentService.belongsTo(models.Appointment, {
      foreignKey: "appointmentid",
    });


    AppointmentService.belongsTo(models.Service, {
      foreignKey: "serviceid",
    });
  };
  
    return AppointmentService;
  };
  