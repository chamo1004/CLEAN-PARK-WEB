module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define("Manager", {
    managerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

 Manager.associate = (models) => {
   Manager.belongsTo(models.User, {
      foreignKey: 'userid',
      allowNull: false,
    });
  };

  return Manager;
};
