module.exports = (sequelize, DataTypes) => {

    const Appointment = sequelize.define("Appointment", {
    
        appointmentid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
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
    });
    Appointment.associate = (models) => {
      Appointment.belongsTo(models.Car, {
        foreignKey: 'carid',
        as: 'car',
      });
    };
  
    return Appointment;
  };