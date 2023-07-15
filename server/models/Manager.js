module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define("Manager", {
    managerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

 Manager.associate = (models) => {
   Manager.belongsTo(models.User, {
      foreignKey: 'userid',
      as: 'user',
    });
  };

  return Manager;
};
