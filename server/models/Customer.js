module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    customerid: {
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
    backuptel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Customer.associate = (models) => {
    Customer.belongsTo(models.User, {
      foreignKey: "userid",
    });
    Customer.hasMany(models.Car, {
      foreignKey: "customerid",
      allowNull: false,
    });
  };

  return Customer;
};
