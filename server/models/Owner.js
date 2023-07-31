module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define("Owner", {
    ownerrid: {
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
    backuptel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

   Owner.associate = (models) => {
    Owner.belongsTo(models.User, {
      foreignKey: 'userid',
      allowNull: false,
    });
  };

  return Owner;
};
