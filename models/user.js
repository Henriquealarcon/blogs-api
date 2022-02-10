const User = (sequelize, DataTypes) => {
  const usuario = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Users' });

  return usuario;
};

module.exports = User;