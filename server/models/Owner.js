module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define("Owner", {
    ownerrid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    backuptel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

   Owner.associate = (models) => {
    Owner.belongsTo(models.User, {
      foreignKey: 'userid',
      as: 'user',
    });
  };

  return Owner;
};
