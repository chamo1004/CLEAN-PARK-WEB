module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });


  return User;
};
